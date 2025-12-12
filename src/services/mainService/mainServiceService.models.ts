import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector';
import { ManePayload } from './mainServiceService.types';
import {
  EResourceType,
  HouseManagementWithStreetsResponse,
  MainDashboardResponse,
  ResourceType,
  // StreetWithBuildingNumbersResponse,
} from 'api/types';
import {
  existingMoDistrictsQuery,
  getMain,
  dashboardOrganizationsQuery,
  dashboardChartQuery,
  fetchAddresses,
} from './mainServiceService.api';
import { EffectFailDataAxiosError } from 'types';
import { createGate } from 'effector-react';
// import { getAddressSearchData } from 'services/resources/resourceConsumptionService/resourceConsumptionService.utils';
import {
  prepareAddressesForTreeSelect,
  prepareAddressesWithParentsForTreeSelect,
} from 'ui-kit/shared/AddressTreeSelect/AddressTreeSelect.utils';

const PageGate = createGate();

const setFilter = createEvent<ManePayload>();

const setResource = createEvent<EResourceType>();

const resetFilter = createEvent();

const getMainFx = createEffect<
  ManePayload,
  MainDashboardResponse,
  EffectFailDataAxiosError
>(getMain);

const $filter = createStore<ManePayload>({
  Date: null,
  City: null,
  District: null,
  BuildingIds: null,
  ManagementFirmId: null,
  Address: null,
})
  .on(setFilter, (prev, data) => ({ ...prev, ...data }))
  .reset(resetFilter);

const $mainData = createStore<MainDashboardResponse | null>(null).on(
  getMainFx.doneData,
  (_, data) => data,
);

const $selectedResource = createStore<EResourceType>(
  EResourceType.ColdWaterSupply,
)
  .on(setResource, (_, resource) => resource)
  .reset(resetFilter);

const $selectedResourceForColor = createStore<EResourceType>(
  EResourceType.ColdWaterSupply,
);

const getAddressesFx = createEffect<
  string,
  HouseManagementWithStreetsResponse[]
>(fetchAddresses);

const selectCity = createEvent<string>();
const $selectedCity = createStore<string | null>(null)
  .on(selectCity, (_, city) => city)
  .reset(resetFilter);

const selectHouseManagememt = createEvent<string | null>();
const $selectedHouseManagement = createStore<string | null>(null)
  .on(selectHouseManagememt, (_, id) => id)
  .reset(resetFilter);

const $houseManagements = createStore<HouseManagementWithStreetsResponse[]>([])
  .on(getAddressesFx.doneData, (_, houseManagements) => houseManagements)
  .reset(PageGate.close);

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
  clock: PageGate.open,
  source: $filter,
  fn: (filter) => ({
    District: filter.District as string,
  }),
  target: existingMoDistrictsQuery.start,
});

sample({
  clock: PageGate.open,
  source: $filter,
  target: [getMainFx, dashboardChartQuery.start],
});

sample({
  clock: $selectedCity,
  filter: Boolean,
  target: getAddressesFx,
});

sample({
  clock: setResource,
  source: $filter,
  fn: (filter, resource) => ({
    ...filter,
    ResourceType: resource as unknown as ResourceType,
  }),
  target: dashboardChartQuery.start,
});

sample({
  source: $filter,
  fn: (filter) => {
    const BuildingIds = filter.BuildingIds || [];

    if (BuildingIds.length) {
      return { BuildingIds };
    } else {
      return filter;
    }
  },

  target: [getMainFx, dashboardChartQuery.start],
});

const $city = $filter.map(({ City }) => City || null);

sample({
  source: $city,
  clock: [PageGate.open, $city.updates],
  target: dashboardOrganizationsQuery.start,
});

sample({
  clock: dashboardChartQuery.finished.success,
  source: $selectedResource,
  target: $selectedResourceForColor,
});

const $isLoading = getMainFx.pending;

export const mainServiceService = {
  inputs: {
    setFilter,
    resetFilter,
    setResource,
    selectHouseManagememt,
    selectCity,
  },
  outputs: {
    $filter,
    $mainData,
    $isLoading,
    $selectedResource,
    $selectedResourceForColor,
    $treeData,
  },
  gates: { PageGate },
};
