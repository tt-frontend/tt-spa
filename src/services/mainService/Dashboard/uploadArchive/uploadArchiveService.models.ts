import { createEvent, createStore, sample } from 'effector';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';
import {
  getCalculatorQuery,
  getBuildingCalculatorsLiteQuery,
  searchBuildingQuery,
} from './uploadArchiveService.api';
import { prepareAddressesForTreeSelect } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.utils';
import { consumptionReportCalculatorService } from 'services/calculators/consumptionReportCalculatorService';
import { message } from 'antd';

const handleChangeCity = createEvent<string>();
const handleSelectHousingAddress = createEvent<string>();
const handleOpen = createEvent();
const handleClose = createEvent();
const handleGetCalculator = createEvent<number>();

const $preparedForOptionsAddresses = createStore<PreparedAddress[]>([]).on(
  searchBuildingQuery.$data,
  (_, data) => prepareAddressesForTreeSelect(data?.items || null),
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

sample({
  clock: handleClose,
  target: [getBuildingCalculatorsLiteQuery.reset, searchBuildingQuery.reset],
});

sample({
  clock: handleGetCalculator,
  target: getCalculatorQuery.start,
});

sample({
  clock: getCalculatorQuery.finished.success,
  target: [
    consumptionReportCalculatorService.inputs.handleModalOpen,
    handleClose,
  ],
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
    handleGetCalculator,
  },
  outputs: { $preparedForOptionsAddresses, $isModalOpen },
};
