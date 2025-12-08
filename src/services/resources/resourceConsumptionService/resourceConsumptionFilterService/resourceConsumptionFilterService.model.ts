import { createEffect, createEvent, createStore } from 'effector';
import { combine, sample } from 'effector';
import {
  EResourceType,
  HouseManagementWithStreetsResponse,
  HousingMeteringDeviceIncludingReadingsResponsePagedList,
  StreetWithBuildingNumbersResponse,
} from 'api/types';
import {
  prepareAddressesForTreeSelect,
  prepareAddressesWithParentsForTreeSelect,
} from 'ui-kit/shared/AddressTreeSelect/AddressTreeSelect.utils';
import { getAddressSearchData } from '../resourceConsumptionService.utils';
import {
  fetchHousingMeteringDevices,
  getAddressesFx,
} from './resourceConsumptionFilterService.api';
import dayjs from 'api/dayjs';
import { resourceConsumptionService } from '../resourceConsumptionService.model';
import {
  ConsumptionDataFilter,
  FetchHousingMeteringDevicesPayload,
} from './resourceConsumptionFilterService.types';
import { createGate } from 'effector-react';

const GetHousingMeteringDevicesGate = createGate();

const clearFilter = createEvent();

const selectCity = createEvent<string>();
const $selectedCity = createStore<string | null>(null)
  .on(selectCity, (_, city) => city)
  .reset(resourceConsumptionService.gates.ResourceConsumptionGate.close);

const selectHouseManagememt = createEvent<string | null>();
const $selectedHouseManagement = createStore<string | null>(null)
  .on(selectHouseManagememt, (_, id) => id)
  .reset(clearFilter);

const $houseManagements = createStore<HouseManagementWithStreetsResponse[]>([])
  .on(getAddressesFx.doneData, (_, houseManagements) => houseManagements)
  .reset(resourceConsumptionService.gates.ResourceConsumptionGate.close);

const setResource = createEvent<EResourceType>();

const $selectedResource = createStore<EResourceType>(
  EResourceType.ColdWaterSupply,
)
  .on(setResource, (_, resource) => resource)
  .reset(clearFilter);

const $selectedResourceForColor = createStore<EResourceType>(
  EResourceType.ColdWaterSupply,
);

const fetchHousingMeteringDevicesFx = createEffect<
  FetchHousingMeteringDevicesPayload,
  HousingMeteringDeviceIncludingReadingsResponsePagedList
>(fetchHousingMeteringDevices);

sample({
  clock: [GetHousingMeteringDevicesGate.open, $selectedResource],
  source: $selectedResource,
  fn: (selectedResource) => ({ Resource: selectedResource }),
  target: fetchHousingMeteringDevicesFx,
});

const $isHousingMeteringDevicesLoading = fetchHousingMeteringDevicesFx.pending;

const $isHousingMeteringDevices = createStore<boolean | null>(null).on(
  fetchHousingMeteringDevicesFx.doneData,
  (_, data) => Boolean(data.totalItems),
);

const setFilter = createEvent<ConsumptionDataFilter>();
const $resourceConsumptionFilter = createStore<ConsumptionDataFilter>({
  From: dayjs().startOf('month').utcOffset(0, true).format(),
  To: dayjs().endOf('month').utcOffset(0, true).format(),
  AdditionalHousingStockIds: [],
  BuildingIds: [],
})
  .on(setFilter, (oldFilter, filter) => ({
    ...oldFilter,
    ...filter,
  }))
  .reset(clearFilter);

const $addressesList = combine(
  $houseManagements,
  $selectedHouseManagement,
  (houseManagements, selectedHouseManagement) => {
    if (!selectedHouseManagement) {
      const streets = houseManagements.reduce(
        (acc, houseManagement) => [...acc, ...(houseManagement.streets || [])],
        [] as StreetWithBuildingNumbersResponse[],
      );

      return getAddressSearchData(streets);
    }

    const requiredHouseManagements = houseManagements.find(
      (houseManagement) => houseManagement.id === selectedHouseManagement,
    );

    return getAddressSearchData(requiredHouseManagements?.streets || []);
  },
);

const $treeData = combine(
  $houseManagements,
  $selectedHouseManagement,
  (houseManagements, selectedHouseManagement) => {
    if (!selectedHouseManagement) {
      return prepareAddressesWithParentsForTreeSelect(houseManagements);
    }
    const requiredHouseManagements = houseManagements.find(
      (houseManagement) => houseManagement.id === selectedHouseManagement,
    );
    return prepareAddressesForTreeSelect({
      items: requiredHouseManagements?.streets || [],
      isTreeCheckable: true,
    });
  },
);

sample({
  clock: $selectedCity,
  filter: Boolean,
  target: getAddressesFx,
});

export const resourceConsumptionFilterService = {
  inputs: {
    selectCity,
    selectHouseManagememt,
    setFilter,
    setResource,
    clearFilter,
  },
  outputs: {
    $treeData,
    $addressesList,
    $selectedHouseManagement,
    $selectedCity,
    $houseManagements,
    $resourceConsumptionFilter,
    $selectedResource,
    $selectedResourceForColor,
    $isHousingMeteringDevices,
    $isHousingMeteringDevicesLoading,
  },
  gates: { GetHousingMeteringDevicesGate },
};
