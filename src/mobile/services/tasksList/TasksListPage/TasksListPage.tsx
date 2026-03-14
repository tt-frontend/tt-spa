import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  FilterIconButton,
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
import { Empty } from 'antd';
import { WithLoader } from 'ui-kit/shared/WithLoader';
import { ContextMenuButton } from 'ui-kit/ContextMenuButton/ContextMenuButton';
import { exportTasksListService } from 'services/tasks/tasksProfileService/view/TasksProfile/exportTasksList/exportTasksListService.models';
import { useUnit } from 'effector-react';
import { MagnifierIcon, FilterIcon } from 'ui-kit/icons';
import { handleChangeGroupType } from 'services/tasks/taskTypesService/taskTypesService.model';
import { ExportTasksListContainer } from 'services/tasks/tasksProfileService/view/TasksProfile/exportTasksList';
import { TaskItem } from './TaskItem';
import { TaskFilter } from './TaskFilter';
import { AddressSearchFieldsNameLookup } from 'services/tasks/tasksProfileService/view/SearchTasks/SearchTasks.constants';

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

  const tasksList = useMemo(
    () => tasks.map((task) => <TaskItem key={task.id} task={task} />),
    [tasks],
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

      <TaskFilter
        isOpen={isExtendedSearchOpen}
        values={values}
        actualTaskTypes={actualTaskTypes}
        housingManagments={housingManagments}
        perpetrators={perpetrators}
        onClose={closeExtendedSearch}
        onApply={handleApplyFilters}
        onClear={clearAllFilters}
        onChange={(name, value) => setFieldValue(name, value)}
        onAddressChange={(key, value) =>
          setFieldValue(AddressSearchFieldsNameLookup[key], value)
        }
        addressInitialValues={{
          city: values.City,
          street: values.Street,
          house: values.HousingStockNumber,
          corpus: values.Corpus,
        }}
      />
    </Wrapper>
  );
};
