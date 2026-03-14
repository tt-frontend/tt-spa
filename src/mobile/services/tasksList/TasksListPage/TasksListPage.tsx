import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  ActionsRow,
  ActionButton,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerHeaderClose,
  DrawerSC,
  FilterIconButton,
  FiltersFooter,
  FiltersSection,
  FiltersTitle,
  HeaderRow,
  HeaderTitle,
  PaginationSC,
  SearchInput,
  SearchRow,
  TabsSC,
  Wrapper,
} from './TasksListPage.styled';
import { Props } from './TasksListPage.types';
import { useFormik } from 'formik';
import { fromEnter } from 'ui-kit/shared/DatePickerNative';
import { useNavigate } from 'react-router-dom';
import { TaskGroupingFilter } from 'api/types';
import { TasksList } from 'services/tasks/tasksProfileService/view/TasksList';
import { Empty } from 'antd';
import { WithLoader } from 'ui-kit/shared/WithLoader';
import { ContextMenuButton } from 'ui-kit/ContextMenuButton/ContextMenuButton';
import { exportTasksListService } from 'services/tasks/tasksProfileService/view/TasksProfile/exportTasksList/exportTasksListService.models';
import { useUnit } from 'effector-react';
import { MagnifierIcon, FilterIcon, CloseIcon } from 'ui-kit/icons';
import { Select } from 'ui-kit/Select';
import { FormItem } from 'ui-kit/FormItem';
import { AddressSearchContainer } from 'services/addressSearchService';
import { SearchFieldType } from 'services/addressSearchService/view/AddressSearch/AddressSearch.types';
import { AddressSearchFieldsNameLookup } from 'services/tasks/tasksProfileService/view/SearchTasks/SearchTasks.constants';
import { handleChangeGroupType } from 'services/tasks/taskTypesService/taskTypesService.model';
import {
  EResourceType,
  EStageTimeStatus,
  ETaskEngineeringElement,
} from 'api/types';
import { EngineeringElementLookUp } from 'dictionaries';
import { actResourceNamesLookup } from 'utils/actResourceNamesLookup';
import { TimeStatusesLookUp } from 'services/tasks/tasksProfileService/tasksProfileService.types';
import { ExportTasksListContainer } from 'services/tasks/tasksProfileService/view/TasksProfile/exportTasksList';

const { Option } = Select;

export const TasksListPage: FC<Props> = ({
  tasks,
  grouptype,
  handleSearch,
  actualTaskTypes,
  initialValues,
  pagedTasks,
  isLoading,
  isExtendedSearchOpen,
  closeExtendedSearch,
  openExtendedSearch,
  clearFilters,
  changeFiltersByGroupType,
  housingManagments,
  perpetrators,
  isSpectator,
  changePageNumber,
  selectedTasks,
  toggleTaskCheckbox,
}) => {
  const { handleExportTasks } = useUnit({
    handleExportTasks: exportTasksListService.inputs.openModal,
  });

  const navigate = useNavigate();
  const { executingTasksCount, observingTasksCount, totalItems } =
    pagedTasks || {};

  const executingTabText = executingTasksCount
    ? `К исполнению (${executingTasksCount})`
    : 'К исполнению';
  const observingTabText = observingTasksCount
    ? `Наблюдаемые (${observingTasksCount})`
    : 'Наблюдаемые';

  const { values, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues: {
      TaskType: initialValues?.TaskType || null,
      TaskId: initialValues?.TaskId,
      TargetType: initialValues?.TargetType,
      GroupType: initialValues?.GroupType,
      HouseManagementId: initialValues?.HouseManagementId,
      DeviceId: initialValues?.DeviceId,
      HousingStockId: initialValues?.HousingStockId,
      HasChanged: initialValues?.HasChanged,
      PipeNodeId: initialValues?.PipeNodeId,
      ClosingStatuses: initialValues?.ClosingStatuses,
      ApplicationCompetenceId: initialValues?.ApplicationCompetenceId,
      TimeStatus: initialValues?.TimeStatus,
      PerpetratorId: initialValues?.PerpetratorId,
      Resource: initialValues?.Resource,
      EngineeringElement: initialValues?.EngineeringElement,
      City: initialValues?.City,
      Street: initialValues?.Street,
      HousingStockNumber: initialValues?.HousingStockNumber,
      Corpus: initialValues?.Corpus,
      ApartmentNumber: initialValues?.ApartmentNumber,
      PageNumber: initialValues?.PageNumber,
      PageSize: initialValues?.PageSize,
      OrderBy: initialValues?.OrderBy,
      OrderRule: initialValues?.OrderRule,
    },
    enableReinitialize: true,
    onSubmit: handleSearch,
  });

  const lastGroupTypeRef = useRef<TaskGroupingFilter | undefined>(undefined);

  useEffect(() => {
    if (lastGroupTypeRef.current === initialValues?.GroupType) {
      return;
    }
    const isFromArchive = lastGroupTypeRef.current === 'Archived';
    const isToArchive =
      initialValues?.GroupType === 'Archived' && lastGroupTypeRef.current;
    if (isFromArchive || isToArchive) {
      setFieldValue('TaskId', '');
    }

    lastGroupTypeRef.current = initialValues?.GroupType;
  }, [initialValues?.GroupType, setFieldValue]);

  const handleKeyDown = useMemo(
    () =>
      fromEnter((e) => {
        e.currentTarget.blur();
        const event = e as unknown as React.ChangeEvent<HTMLInputElement>;

        setFieldValue(event.target.name, event.target.value);
        handleSubmit();
      }),
    [setFieldValue, handleSubmit],
  );

  const clearAllFilters = useCallback(() => {
    clearFilters();
    resetForm();
    changeFiltersByGroupType(grouptype);
  }, [clearFilters, resetForm, changeFiltersByGroupType, grouptype]);

  const handleApplyFilters = () => {
    handleSubmit();
    closeExtendedSearch();
  };

  const tabItems = useMemo(
    () => [
      ...(!isSpectator
        ? [
            {
              label: executingTabText,
              key: TaskGroupingFilter.Executing,
            },
          ]
        : []),
      {
        label: observingTabText,
        key: TaskGroupingFilter.Observing,
      },
      {
        label: 'Архив',
        key: TaskGroupingFilter.Archived,
      },
    ],
    [isSpectator, executingTabText, observingTabText],
  );

  useEffect(() => {
    if (isSpectator && grouptype === TaskGroupingFilter.Executing) {
      navigate('/tasks/list/Observing');
    }
  }, [isSpectator, grouptype, navigate]);

  const housingManagementOptions = useMemo(
    () =>
      (housingManagments || [])
        .filter((elem) => Boolean(elem.key))
        .map(({ value, key }) => (
          <Option key={key} value={key}>
            {value}
          </Option>
        )),
    [housingManagments],
  );

  const taskTypeOptions = (actualTaskTypes || []).map(
    ({ taskType, typeName }) => (
      <Option key={taskType} value={taskType}>
        {typeName}
      </Option>
    ),
  );

  const tasksList = useMemo(
    () => (
      <TasksList
        tasks={tasks}
        selectedTasks={selectedTasks}
        toggleTaskCheckbox={toggleTaskCheckbox}
      />
    ),
    [tasks, selectedTasks, toggleTaskCheckbox],
  );

  return (
    <Wrapper>
      <ExportTasksListContainer />
      <HeaderRow>
        <HeaderTitle>Задачи</HeaderTitle>
        <ContextMenuButton
          size="small"
          menuButtons={[
            {
              title: 'Выгрузить список задач',
              onClick: handleExportTasks,
            },
          ]}
        />
      </HeaderRow>

      <TabsSC
        activeKey={grouptype}
        onChange={(activeKey) => {
          navigate(`/tasks/list/${activeKey}`);
          handleChangeGroupType(activeKey as TaskGroupingFilter);
        }}
        items={tabItems}
      />

      <SearchRow>
        <SearchInput
          placeholder="Введите номер задачи или адрес"
          name="TaskId"
          value={values.TaskId}
          onChange={(e) => setFieldValue('TaskId', e.target.value)}
          onKeyDown={handleKeyDown}
          prefix={<MagnifierIcon />}
        />
        <FilterIconButton
          type="ghost"
          size="s"
          icon={<FilterIcon />}
          onClick={openExtendedSearch}
        />
      </SearchRow>

      <WithLoader isLoading={isLoading}>
        {tasks?.length ? (
          tasksList
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Нет задач" />
        )}
      </WithLoader>

      {!isLoading && Boolean(tasks?.length) && (
        <PaginationSC
          disabled={Boolean(selectedTasks.length)}
          defaultCurrent={1}
          onChange={changePageNumber}
          pageSize={20}
          total={totalItems}
          current={initialValues?.PageNumber}
          showSizeChanger={false}
        />
      )}

      <DrawerSC
        open={isExtendedSearchOpen}
        title={<></>}
        closable={false}
        maskClosable={true}
        onClose={closeExtendedSearch}
        placement="right"
        width="100%"
        style={{ padding: 0 }}
        headerStyle={{ display: 'none' }}
      >
        <DrawerHeader>
          <FiltersTitle>Фильтры</FiltersTitle>
          <DrawerHeaderClose onClick={closeExtendedSearch}>
            <CloseIcon />
          </DrawerHeaderClose>
        </DrawerHeader>
        <DrawerBody>
          <FiltersSection>
            <DrawerHeaderTitle>Адрес</DrawerHeaderTitle>
            <AddressSearchContainer
              isCityPreselected={false}
              onChange={(key, value) =>
                setFieldValue(AddressSearchFieldsNameLookup[key], value)
              }
              fields={[
                SearchFieldType.City,
                SearchFieldType.Street,
                SearchFieldType.House,
                SearchFieldType.Corpus,
              ]}
              showLabels
              className="mobile-address-search"
              initialValues={{
                city: values.City,
                street: values.Street,
                house: values.HousingStockNumber,
                corpus: values.Corpus,
              }}
            />
            <FormItem label="Кв">
              <SearchInput
                name="ApartmentNumber"
                value={values.ApartmentNumber}
                onChange={(e) =>
                  setFieldValue('ApartmentNumber', e.target.value)
                }
                placeholder="Квартира"
              />
            </FormItem>
          </FiltersSection>

          <FiltersSection>
            <FormItem label="Элемент инженерной сети">
              <Select
                showAction={['focus']}
                placeholder="Элемент"
                value={values.EngineeringElement}
                onChange={(value) => {
                  setFieldValue('EngineeringElement', value);
                  setFieldValue('TaskType', '');
                }}
              >
                <Option value={''}>Все</Option>
                {Object.keys(ETaskEngineeringElement).map((el) => (
                  <Option value={el} key={el}>
                    {EngineeringElementLookUp[el as ETaskEngineeringElement]}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="Тип ресурса">
              <Select
                showAction={['focus']}
                placeholder="Тип ресурса"
                value={values.Resource}
                onChange={(value) => {
                  setFieldValue('Resource', value);
                }}
              >
                <Option value={''}>Все</Option>
                {Object.keys(EResourceType).map((el) => (
                  <Option value={el} key={el}>
                    {actResourceNamesLookup[el as EResourceType]}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="Домоуправление">
              <Select
                showAction={['focus']}
                placeholder="Домоуправление"
                value={values?.HouseManagementId}
                onChange={(value) => {
                  setFieldValue('HouseManagementId', value);
                }}
              >
                <Option value={''}>Все</Option>
                {housingManagementOptions}
              </Select>
            </FormItem>
          </FiltersSection>

          <FiltersSection>
            <FormItem label="Статус">
              <Select
                showAction={['focus']}
                placeholder="Статус"
                value={values.TimeStatus}
                onChange={(value) => {
                  setFieldValue('TimeStatus', value);
                }}
              >
                <Option value={''}>Все</Option>
                {Object.keys(EStageTimeStatus).map((el) => (
                  <Option value={el} key={el}>
                    {TimeStatusesLookUp[el as EStageTimeStatus]}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="Тип задачи">
              <Select
                id="TaskType"
                placeholder="Тип задачи"
                value={values.TaskType || undefined}
                onChange={(value) => {
                  setFieldValue('TaskType', value);
                }}
              >
                {taskTypeOptions}
              </Select>
            </FormItem>
            <FormItem label="Исполнитель">
              <Select
                showAction={['focus']}
                placeholder="Исполнитель"
                value={values.PerpetratorId}
                onChange={(value) => {
                  setFieldValue('PerpetratorId', value);
                }}
              >
                <Option value={''}>Все</Option>
                {perpetrators &&
                  perpetrators.map(({ id, firstName, lastName }) => (
                    <Option key={id} value={id}>
                      {lastName} {firstName}
                    </Option>
                  ))}
              </Select>
            </FormItem>
          </FiltersSection>
        </DrawerBody>
        <FiltersFooter>
          <ActionsRow>
            <ActionButton onClick={handleApplyFilters} type="primary">
              Применить фильтр
            </ActionButton>
            <ActionButton onClick={clearAllFilters} type="ghost">
              Очистить
            </ActionButton>
          </ActionsRow>
        </FiltersFooter>
      </DrawerSC>
    </Wrapper>
  );
};
