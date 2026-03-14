import { FC, useMemo } from 'react';
import { Select } from 'ui-kit/Select';
import { FormItem } from 'ui-kit/FormItem';
import { AddressSearchContainer } from 'services/addressSearchService';
import { SearchFieldType } from 'services/addressSearchService/view/AddressSearch/AddressSearch.types';
import {
  EResourceType,
  EStageTimeStatus,
  ETaskEngineeringElement,
} from 'api/types';
import { EngineeringElementLookUp } from 'dictionaries';
import { actResourceNamesLookup } from 'utils/actResourceNamesLookup';
import { TimeStatusesLookUp } from 'services/tasks/tasksProfileService/tasksProfileService.types';
import { CloseIcon } from 'ui-kit/icons';
import { Input } from 'ui-kit/Input';
import {
  ActionButton,
  ActionsRow,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderClose,
  DrawerHeaderTitle,
  DrawerSC,
  FiltersFooter,
  FiltersSection,
  FiltersTitle,
} from './TaskFilter.styled';
import { TaskFilterProps } from './TaskFilter.types';

const { Option } = Select;

export const TaskFilter: FC<TaskFilterProps> = ({
  isOpen,
  values,
  actualTaskTypes,
  housingManagments,
  perpetrators,
  onClose,
  onApply,
  onClear,
  onChange,
  onAddressChange,
  addressInitialValues,
}) => {
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

  return (
    <DrawerSC
      open={isOpen}
      title={<></>}
      closable={false}
      maskClosable={true}
      onClose={onClose}
      placement="right"
      width="100%"
      style={{ padding: 0 }}
      headerStyle={{ display: 'none' }}
    >
      <DrawerHeader>
        <FiltersTitle>Фильтры</FiltersTitle>
        <DrawerHeaderClose onClick={onClose}>
          <CloseIcon />
        </DrawerHeaderClose>
      </DrawerHeader>
      <DrawerBody>
        <FiltersSection>
          <DrawerHeaderTitle>Адрес</DrawerHeaderTitle>
          <AddressSearchContainer
            isCityPreselected={false}
            onChange={(key, value) =>
              onAddressChange(key as SearchFieldType, value)
            }
            fields={[
              SearchFieldType.City,
              SearchFieldType.Street,
              SearchFieldType.House,
              SearchFieldType.Corpus,
            ]}
            showLabels
            className="mobile-address-search"
            initialValues={addressInitialValues}
          />
          <FormItem label="Кв">
            <Input
              name="ApartmentNumber"
              value={values.ApartmentNumber}
              onChange={(e) => onChange('ApartmentNumber', e.target.value)}
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
                onChange('EngineeringElement', value);
                onChange('TaskType', '');
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
                onChange('Resource', value);
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
              value={values.HouseManagementId}
              onChange={(value) => {
                onChange('HouseManagementId', value);
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
                onChange('TimeStatus', value);
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
                onChange('TaskType', value);
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
                onChange('PerpetratorId', value);
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
          <ActionButton onClick={onApply} type="primary">
            Применить фильтр
          </ActionButton>
          <ActionButton onClick={onClear} type="ghost">
            Очистить
          </ActionButton>
        </ActionsRow>
      </FiltersFooter>
    </DrawerSC>
  );
};
