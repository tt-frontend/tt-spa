import { combine, createEvent, createStore, sample } from 'effector';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';
import {
  getCalculatorQuery,
  getBuildingCalculatorsLiteQuery,
  searchBuildingQuery,
} from './uploadArchiveService.api';
import { prepareAddressesForTreeSelect } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.utils';
import { consumptionReportCalculatorService } from 'services/calculators/consumptionReportCalculatorService';
import { message } from 'antd';
import { CalculatorResponse, EResourceType } from 'api/types';
import { LightCalculatorWithResource } from './uploadArchiveService.types';
import { currentOrganizationService } from 'services/currentOrganizationService';
import { addressSearchService } from 'services/addressSearchService/addressSearchService.models';

const handleChangeCity = createEvent<string>();
const handleSelectHousingAddress = createEvent<string>();
const handleOpen = createEvent();
const handleClose = createEvent();
const handleNextStage = createEvent<number>();

const $preparedForOptionsAddresses = createStore<PreparedAddress[]>([]).on(
  searchBuildingQuery.$data,
  (_, data) => prepareAddressesForTreeSelect(data?.items || null),
);

const $heavyСalculatorsList = createStore<CalculatorResponse[]>([])
  .on(getCalculatorQuery.finished.success, (state, { result }) => [
    ...state,
    result,
  ])
  .reset(handleSelectHousingAddress, handleClose);

const $chosenCalculator = createStore<CalculatorResponse | null>(null);

const $lightСalculatorsList = createStore<LightCalculatorWithResource[]>([]).on(
  getBuildingCalculatorsLiteQuery.$data,
  (_, data) => data?.map((item) => ({ ...item, resource: [] })) || [],
);

const $lightCalculatorsWithResource = combine(
  $lightСalculatorsList,
  $heavyСalculatorsList,
  (light, heavy): LightCalculatorWithResource[] => {
    const heavyById = new Map(heavy.map((c) => [c.id, c]));

    return light.map((calc) => {
      const heavyCalc = heavyById.get(calc.id);

      const resource: EResourceType[] =
        heavyCalc?.nodes?.map((node) => node.resource).filter(Boolean) ?? [];

      return {
        ...calc,
        resource,
      };
    });
  },
);

const $isModalOpen = createStore<boolean>(false)
  .on(handleOpen, () => true)
  .on(handleClose, () => false);

sample({
  clock: handleChangeCity,
  fn: (city) => ({ City: city }),
  target: searchBuildingQuery.start,
});

sample({
  clock: handleSelectHousingAddress,
  source: $preparedForOptionsAddresses,
  fn: (optionAddresses, selectedAddress) => {
    const selectedOption = optionAddresses.find(
      (optionItem) => optionItem.address === selectedAddress,
    );
    return { buildingId: Number(selectedOption?.id) };
  },
  target: getBuildingCalculatorsLiteQuery.start,
});

const fetchCalculatorById = createEvent<number>();
const fetchCalculatorIds = createEvent<number[]>();

sample({
  clock: getBuildingCalculatorsLiteQuery.finished.success,
  fn: (calculators) => calculators.result.map((calculator) => calculator.id),
  target: fetchCalculatorIds,
});

fetchCalculatorIds.watch((ids) => {
  ids.forEach((id) => {
    fetchCalculatorById(id);
  });
});

sample({
  clock: fetchCalculatorById,
  target: getCalculatorQuery.start,
});

sample({
  clock: handleClose,
  target: [getBuildingCalculatorsLiteQuery.reset],
});

sample({
  clock: handleNextStage,
  source: $heavyСalculatorsList,
  fn: (calculators, calculatorId) =>
    calculators.find((calculator) => calculator.id === calculatorId) || null,
  target: $chosenCalculator,
});

sample({
  clock: handleNextStage,
  target: [
    handleClose,
    consumptionReportCalculatorService.inputs.handleModalOpen,
  ],
});

const $initialCity = combine(
  currentOrganizationService.outputs.$defaultCity,
  addressSearchService.outputs.$existingCities,
  (defaultCity, existingCities) => {
    if (existingCities?.length === 1) {
      return existingCities[0];
    }
    if (defaultCity) {
      return defaultCity;
    }
    return null;
  },
);

sample({
  clock: handleOpen,
  source: $initialCity,
  filter: Boolean,
  target: handleChangeCity,
});

getCalculatorQuery.finished.failure.watch(() => {
  return message.error('Вычислитель не найден');
});

export const uploadArchiveService = {
  inputs: {
    handleChangeCity,
    handleOpen,
    handleClose,
    handleSelectHousingAddress,
    handleNextStage,
  },
  outputs: {
    $preparedForOptionsAddresses,
    $isModalOpen,
    $lightCalculatorsWithResource,
    $initialCity,
    $chosenCalculator,
  },
};
