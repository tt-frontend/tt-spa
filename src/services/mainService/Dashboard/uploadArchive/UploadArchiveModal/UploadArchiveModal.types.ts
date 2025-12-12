import { CalculatorIntoHousingStockResponse } from 'api/types';
import { EventCallable } from 'effector';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';

export type Props = {
  handleChangeCity: (payload: string) => void;
  preparedForOptionsAddresses: PreparedAddress[];
  isModalOpen: boolean;
  handleClose: () => void;
  existingCities: string[] | null;
  handleSelectHousingAddress: (payload: string) => void;
  calculators: CalculatorIntoHousingStockResponse[] | null;
  handleGetCalculator: (payload: number) => void;
  isCalculatorLoading: boolean;
  handleResetForm: EventCallable<void>;
};
