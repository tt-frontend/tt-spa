import { uploadArchiveService } from './uploadArchiveService.models';
import { UploadArchiveModal } from './UploadArchiveModal';
import { useUnit } from 'effector-react';
import { addressSearchService } from 'services/addressSearchService/addressSearchService.models';
import { getCalculatorQuery } from './uploadArchiveService.api';
import { ConsumptionReportCalculatorContainer } from 'services/calculators/consumptionReportCalculatorService';

const { inputs, outputs } = uploadArchiveService;

export const UploadArchiveContainer = () => {
  const {
    handleChangeCity,
    preparedForOptionsAddresses,
    isModalOpen,
    handleClose,
    existingCities,
    handleSelectHousingAddress,
    handleNextStage,
    isCalculatorLoading,
    calculatorsWithResource,
    initialCity,
    chosenCalculator,
  } = useUnit({
    handleChangeCity: inputs.handleChangeCity,
    preparedForOptionsAddresses: outputs.$preparedForOptionsAddresses,
    isModalOpen: outputs.$isModalOpen,
    handleClose: inputs.handleClose,
    existingCities: addressSearchService.outputs.$existingCities,
    handleSelectHousingAddress: inputs.handleSelectHousingAddress,
    handleNextStage: inputs.handleNextStage,
    isCalculatorLoading: getCalculatorQuery.$pending,
    calculatorsWithResource: outputs.$lightCalculatorsWithResource,
    initialCity: outputs.$initialCity,
    chosenCalculator: outputs.$chosenCalculator,
  });

  console.log(chosenCalculator);

  return (
    <>
      <ConsumptionReportCalculatorContainer calculator={chosenCalculator} />

      <UploadArchiveModal
        handleChangeCity={handleChangeCity}
        preparedForOptionsAddresses={preparedForOptionsAddresses}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        existingCities={existingCities}
        handleSelectHousingAddress={handleSelectHousingAddress}
        calculatorsWithResource={calculatorsWithResource}
        handleNextStage={handleNextStage}
        isCalculatorLoading={isCalculatorLoading}
        handleResetForm={inputs.handleClose}
        initialCity={initialCity}
      />
    </>
  );
};
