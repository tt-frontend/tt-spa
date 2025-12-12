import { uploadArchiveService } from './uploadArchiveService.models';
import { UploadArchiveModal } from './UploadArchiveModal';
import { useUnit } from 'effector-react';
import { addressSearchService } from 'services/addressSearchService/addressSearchService.models';
import {
  getCalculatorQuery,
  getBuildingCalculatorsLiteQuery,
} from './uploadArchiveService.api';

const { inputs, outputs } = uploadArchiveService;

export const UploadArchiveContainer = () => {
  const {
    handleChangeCity,
    preparedForOptionsAddresses,
    isModalOpen,
    handleClose,
    existingCities,
    handleSelectHousingAddress,
    calculators,
    handleGetCalculator,
    isCalculatorLoading,
  } = useUnit({
    handleChangeCity: inputs.handleChangeCity,
    preparedForOptionsAddresses: outputs.$preparedForOptionsAddresses,
    isModalOpen: outputs.$isModalOpen,
    handleClose: inputs.handleClose,
    existingCities: addressSearchService.outputs.$existingCities,
    handleSelectHousingAddress: inputs.handleSelectHousingAddress,
    calculators: getBuildingCalculatorsLiteQuery.$data,
    handleGetCalculator: inputs.handleGetCalculator,
    isCalculatorLoading: getCalculatorQuery.$pending,
  });

  return (
    <UploadArchiveModal
      handleChangeCity={handleChangeCity}
      preparedForOptionsAddresses={preparedForOptionsAddresses}
      isModalOpen={isModalOpen}
      handleClose={handleClose}
      existingCities={existingCities}
      handleSelectHousingAddress={handleSelectHousingAddress}
      calculators={calculators}
      handleGetCalculator={handleGetCalculator}
      isCalculatorLoading={isCalculatorLoading}
      handleResetForm={inputs.handleClose}
    />
  );
};
