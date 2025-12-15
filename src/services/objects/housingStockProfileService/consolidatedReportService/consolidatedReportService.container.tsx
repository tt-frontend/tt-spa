import React, { FC } from 'react';
import { useUnit } from 'effector-react';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { consolidatedReportService } from './consolidatedReportService.model';
import { ConsolidatedReportForm } from './view/ConsolidatedReportForm';
import { Props } from './consolidatedReportService.types';
import { addressSearchService } from 'services/addressSearchService/addressSearchService.models';

const { inputs, outputs } = consolidatedReportService;

const formId = 'consolidated-report-form';

export const ConsolidatedReportContainer: FC<Props> = ({ building }) => {
  const {
    closeModal,
    handleSubmit,
    isLoading,
    isModalOpen,
    resetBuilding,
    preparedForOptionsAddresses,
    existingCities,
    handleChangeCity,
  } = useUnit({
    closeModal: inputs.closeConsolidatedReportModal,
    handleSubmit: inputs.handleSubmit,
    isModalOpen: outputs.$isModalOpen,
    isLoading: outputs.$isLoading,
    resetBuilding: inputs.resetBuilding,
    preparedForOptionsAddresses: outputs.$preparedForOptionsAddresses,
    existingCities: addressSearchService.outputs.$existingCities,
    handleChangeCity: inputs.handleChangeCity,
  });

  return (
    <FormModal
      title="Выгрузка сводного отчёта"
      visible={isModalOpen}
      loading={isLoading}
      onCancel={() => closeModal()}
      formId={formId}
      submitBtnText="Выгрузить отчет"
      form={
        <ConsolidatedReportForm
          handleSubmit={handleSubmit}
          building={building}
          formId={formId}
          resetBuilding={resetBuilding}
          preparedForOptionsAddresses={preparedForOptionsAddresses}
          existingCities={existingCities}
          handleChangeCity={handleChangeCity}
        />
      }
    />
  );
};
