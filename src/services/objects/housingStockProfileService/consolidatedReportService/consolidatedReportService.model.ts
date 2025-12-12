import { createEffect, createEvent, createStore } from 'effector';
import { sample } from 'effector';
import { message } from 'antd';
import { EffectFailDataAxiosError } from 'types';
import {
  GetBuildingPayload,
  GetConsolidatedReport,
} from './consolidatedReportService.types';
import {
  getBuilding,
  getConsolidatedReport,
} from './consolidatedReportService.api';
import { BuildingListResponse, BuildingListResponsePagedList } from 'api/types';

const openConsolidatedReportModal = createEvent();
const closeConsolidatedReportModal = createEvent();

const handleSubmit = createEvent<GetConsolidatedReport>();

const handleSearcheBuilding = createEvent<GetBuildingPayload>();

const resetBuilding = createEvent();

const downloadConsolidatedReportFx = createEffect<
  GetConsolidatedReport,
  void,
  EffectFailDataAxiosError
>(getConsolidatedReport);

const getBuildingFx = createEffect<
  GetBuildingPayload,
  BuildingListResponsePagedList,
  EffectFailDataAxiosError
>(getBuilding);

sample({
  clock: handleSubmit,
  target: downloadConsolidatedReportFx,
});

sample({
  clock: handleSearcheBuilding,
  target: getBuildingFx,
});

const $searchedBuilding = createStore<BuildingListResponse | null>(null)
  .on(getBuildingFx.doneData, (_, data) =>
    data.items?.length ? data?.items[0] : null,
  )
  .reset([closeConsolidatedReportModal, resetBuilding]);

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
    handleSearcheBuilding,
    resetBuilding,
  },
  outputs: { $isModalOpen, $isLoading, $searchedBuilding },
};
