import { createEffect, createEvent, createStore } from 'effector';
import { sample } from 'effector';
import { message } from 'antd';
import { EffectFailDataAxiosError } from 'types';
import { GetConsolidatedReport } from './consolidatedReportService.types';
import {
  getConsolidatedReport,
  searchBuildingQuery,
} from './consolidatedReportService.api';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';
import { prepareAddressesForTreeSelect } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.utils';

const openConsolidatedReportModal = createEvent();
const closeConsolidatedReportModal = createEvent();

const handleSubmit = createEvent<GetConsolidatedReport>();

const handleChangeCity = createEvent<string>();

const downloadConsolidatedReportFx = createEffect<
  GetConsolidatedReport,
  void,
  EffectFailDataAxiosError
>(getConsolidatedReport);

sample({
  clock: handleSubmit,
  target: downloadConsolidatedReportFx,
});

sample({
  clock: handleChangeCity,
  fn: (city) => ({ City: city }),
  target: searchBuildingQuery.start,
});

const $preparedForOptionsAddresses = createStore<PreparedAddress[]>([]).on(
  searchBuildingQuery.$data,
  (_, data) => prepareAddressesForTreeSelect(data?.items || []),
);

downloadConsolidatedReportFx.failData.watch((error) => {
  return message.error(
    error.response.data.error.Text || error.response.data.error.Message,
  );
});

const $isModalOpen = createStore(false)
  .on(openConsolidatedReportModal, () => true)
  .reset(closeConsolidatedReportModal, downloadConsolidatedReportFx.doneData);

const $isLoading = downloadConsolidatedReportFx.pending;

export const consolidatedReportService = {
  inputs: {
    openConsolidatedReportModal,
    closeConsolidatedReportModal,
    handleSubmit,
    handleChangeCity,
  },
  outputs: {
    $isModalOpen,
    $isLoading,
    $preparedForOptionsAddresses,
  },
};
