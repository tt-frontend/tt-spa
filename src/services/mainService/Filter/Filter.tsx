import { FC, useMemo } from 'react';
import { Wrapper } from './Filter.styled';
import { Props } from './Filter.types';
import { Select } from 'ui-kit/Select';
import { AddressTreeSelect } from 'ui-kit/shared/AddressTreeSelect';
import { Tooltip } from 'ui-kit/shared/Tooltip';
import { StyledMenuButton } from 'ui-kit/ContextMenuButton/ContextMenuButton.styled';
import { ResetIcon } from 'ui-kit/icons';

export const Filter: FC<Props> = ({
  filter,
  setFilter,
  resetFilter,
  existingMoDistricts,
  organizations,
}) => {
  const citiesOptions = useMemo(() => {
    if (!filter.District || !existingMoDistricts) return null;

    const ditrict = existingMoDistricts.items?.find(
      (item) => item.name === filter.District,
    );

    if (!ditrict) return null;

    return ditrict.subjects.map((elem) => elem.name);
  }, [filter, existingMoDistricts]);

  console.log(organizations);

  return (
    <Wrapper>
      <Select
        placeholder="Округ"
        small
        allowClear
        value={filter.District}
        onChange={(value) =>
          setFilter({
            District: value as string | null,
            City: null,
          })
        }
      >
        <Select.Option key={0} value={null}>
          Все округа
        </Select.Option>
        {existingMoDistricts?.items?.map((item) => (
          <Select.Option key={item.name} value={item.name}>
            {item.name} ({item.type})
          </Select.Option>
        ))}
      </Select>

      <Select
        placeholder="Город"
        small
        value={filter.City}
        allowClear
        onChange={(value) => {
          setFilter({
            City: value as string,
            ManagementFirmId: null,
          });
        }}
      >
        <Select.Option key={0} value={null}>
          Все города
        </Select.Option>

        {citiesOptions &&
          citiesOptions.map((city) => (
            <Select.Option key={city} value={city}>
              {city}
            </Select.Option>
          ))}
      </Select>

      <Select
        placeholder="УК"
        small
        allowClear
        value={filter.ManagementFirmId}
        onChange={(value) => setFilter({ ManagementFirmId: value as number })}
      >
        <Select key={0} value={null}>
          Все УК
        </Select>

        {organizations?.items?.map((elem) => (
          <Select key={elem.id} value={elem.id}>
            {elem.name}
          </Select>
        ))}
      </Select>

      <Select
        placeholder="Домоуправление"
        small
        allowClear
        value={filter.HouseManagementId}
        onChange={(value) => setFilter({ HouseManagementId: value as string })}
      >
        <Select key={0} value={null}>
          Все домоуправления
        </Select>

        {organizations?.items?.map((elem) => (
          <Select key={elem.id} value={elem.id}>
            {elem.name}
          </Select>
        ))}
      </Select>

      <AddressTreeSelect
        small
        placeholder="Адрес"
        selectedHousingStockIds={filter.BuildingIds || []}
        treeData={[]}
        onChange={(values) => {
          setFilter({ BuildingIds: values });
        }}
      />
      <Tooltip title="Сбросить фильтры">
        <StyledMenuButton size="small" onClick={resetFilter}>
          <ResetIcon />
        </StyledMenuButton>
      </Tooltip>
    </Wrapper>
  );
};
