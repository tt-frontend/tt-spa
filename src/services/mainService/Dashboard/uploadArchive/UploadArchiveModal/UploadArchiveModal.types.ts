import { EventCallable } from 'effector';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';
import { LightCalculatorWithResource } from '../uploadArchiveService.types';

export type Props = {
  handleChangeCity: (payload: string) => void;
  preparedForOptionsAddresses: PreparedAddress[];
  isModalOpen: boolean;
  handleClose: () => void;
  existingCities: string[] | null;
  handleSelectHousingAddress: (payload: string) => void;
  calculatorsWithResource: LightCalculatorWithResource[];
  handleNextStage: (payload: number) => void;
  isCalculatorLoading: boolean;
  handleResetForm: EventCallable<void>;
};
