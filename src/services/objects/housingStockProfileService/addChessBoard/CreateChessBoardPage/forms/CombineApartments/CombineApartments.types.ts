import { PremiseLocationCreateModel } from 'api/types';
import { CombineApartmentsModalState } from '../../../addChessBoardService.types';

export type Props = {
  combineApartmentModalState: CombineApartmentsModalState | null;
  handleCloseDownModal: () => void;
  chessboardCreateData: PremiseLocationCreateModel;
};
