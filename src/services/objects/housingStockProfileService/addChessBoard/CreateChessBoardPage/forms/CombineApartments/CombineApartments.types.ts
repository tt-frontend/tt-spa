import { PremiseLocationCreateModel } from 'api/types';
import {
  CombineApartmentsModalState,
  CombineApartmentsPayload,
} from '../../../addChessBoardService.types';

export type Props = {
  combineApartmentModalState: CombineApartmentsModalState | null;
  handleCloseDownModal: () => void;
  chessboardCreateData: PremiseLocationCreateModel;
  handleSaveCombineApartments: (payload: CombineApartmentsPayload) => void;
};
