import { useEffect, useMemo, useRef } from 'react';
import { useUnit } from 'effector-react';
import { TasksListPage } from './TasksListPage';
import { tasksProfileService } from 'services/tasks/tasksProfileService';
import { useParams } from 'react-router-dom';
import { ESecuredIdentityRoleName, TaskGroupingFilter } from 'api/types';
import {
  getAddressObject,
  prepareData,
} from 'services/tasks/tasksProfileService/tasksProfileService.utils';
import {
  $actualTaskTypes,
  ActualTaskTypesGate,
  TaskTypesGate,
} from 'services/tasks/taskTypesService/taskTypesService.model';
import queryString from 'query-string';
import { usePermission } from 'hooks/usePermission';

const { inputs, outputs, gates } = tasksProfileService;
const { InitialGate } = gates;

export const TasksListContainer = () => {
  const { grouptype } = useParams<{
    grouptype: TaskGroupingFilter;
  }>() as { grouptype: TaskGroupingFilter };

  const {
    actualTaskTypes,
    housingManagments,
    perpetrators,
    pagedTasks,
    isLoading,
    isExtendedSearchOpen,
    apartment,
    housingStock,
    initialValues,
    handleSearch,
    changeFiltersByGroupType,
    changeGroupType,
    changePageNumber,
    closeExtendedSearch,
    openExtendedSearch,
    clearFilters,
    clearAddress,
    selectedTasks,
    setSelectedTasks,
  } = useUnit({
    actualTaskTypes: $actualTaskTypes,
    housingManagments: outputs.$housingManagments,
    perpetrators: outputs.$organizationUsers,
    pagedTasks: outputs.$tasksPagedData,
    isLoading: outputs.$isLoading,
    isExtendedSearchOpen: outputs.$isExtendedSearchOpen,
    apartment: outputs.$apartment,
    housingStock: outputs.$housingStock,
    initialValues: outputs.$searchState,
    handleSearch: inputs.searchTasks,
    changeFiltersByGroupType: inputs.changeFiltersByGroupType,
    changeGroupType: inputs.changeGroupType,
    changePageNumber: inputs.changePageNumber,
    closeExtendedSearch: inputs.extendedSearchClosed,
    openExtendedSearch: inputs.extendedSearchOpened,
    clearFilters: inputs.clearFilters,
    clearAddress: inputs.clearAddress,
    selectedTasks: outputs.$selectedTasks,
    setSelectedTasks: inputs.setSelectedTasks,
  });

  const isSpectator = usePermission([
    ESecuredIdentityRoleName.ManagingFirmSpectator,
    ESecuredIdentityRoleName.ManagingFirmSpectatorRestricted,
    ESecuredIdentityRoleName.ManagingFirmSpectatingAdministrator,
    ESecuredIdentityRoleName.Supervisor,
  ]);

  useEffect(() => {
    setSelectedTasks([]);
  }, [grouptype, setSelectedTasks]);

  const { apartmentId, housingStockId } = queryString.parse(
    window.location.search,
  );

  const lastGroupTypeRef = useRef<TaskGroupingFilter | null>(
    initialValues?.GroupType || null,
  );

  useEffect(() => {
    closeExtendedSearch();

    const isApartmentIdExist = Boolean(apartmentId);
    const isHousingStockIdExist = Boolean(housingStockId);
    if (isApartmentIdExist || isHousingStockIdExist) {
      lastGroupTypeRef.current = grouptype;
      return;
    }
    clearAddress();

    if (lastGroupTypeRef.current === grouptype) {
      return;
    }
    const isFromArchive = lastGroupTypeRef.current === 'Archived';
    const isToArchive = grouptype === 'Archived' && lastGroupTypeRef.current;
    if (isFromArchive || isToArchive) {
      changeFiltersByGroupType(grouptype as TaskGroupingFilter);
    } else {
      changeGroupType(grouptype);
    }

    lastGroupTypeRef.current = grouptype;
  }, [
    grouptype,
    apartmentId,
    housingStockId,
    changeFiltersByGroupType,
    changeGroupType,
    clearAddress,
    closeExtendedSearch,
  ]);

  const preparedTasks = useMemo(() => {
    const prepared = prepareData(pagedTasks?.items || [], grouptype);

    return prepared.map((task) => ({
      ...task,
      formatedCreationTime: task.formatedCreationTime || '',
    }));
  }, [pagedTasks?.items, grouptype]);

  useEffect(() => {
    if (apartment) {
      const apartmentAddress = getAddressObject(apartment.housingStock);
      handleSearch({
        ...apartmentAddress,
        ApartmentNumber: apartment.apartmentNumber || '',
        GroupType: grouptype,
      });
      return;
    }
    if (housingStock) {
      const apartmentAddress = getAddressObject(housingStock);
      handleSearch({
        ...apartmentAddress,
        GroupType: grouptype,
      });
    }
  }, [apartment, housingStock, handleSearch, grouptype]);

  return (
    <>
      <InitialGate />
      <TaskTypesGate />
      <ActualTaskTypesGate groupType={grouptype} />
      <TasksListPage
        tasks={preparedTasks}
        grouptype={grouptype}
        handleSearch={handleSearch}
        actualTaskTypes={actualTaskTypes}
        initialValues={initialValues}
        pagedTasks={pagedTasks}
        isLoading={isLoading}
        isExtendedSearchOpen={isExtendedSearchOpen}
        closeExtendedSearch={closeExtendedSearch}
        openExtendedSearch={openExtendedSearch}
        clearFilters={clearFilters}
        changeFiltersByGroupType={changeFiltersByGroupType}
        housingManagments={housingManagments}
        perpetrators={perpetrators}
        isSpectator={isSpectator}
        changePageNumber={changePageNumber}
        selectedTasks={selectedTasks}
      />
    </>
  );
};
