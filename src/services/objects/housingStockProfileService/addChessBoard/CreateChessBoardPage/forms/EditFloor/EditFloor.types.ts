import { PremiseLocationCreateModel } from 'api/types';
import {
  EditFloorPayload,
  OpenEditFloorModalPayload,
} from '../../../addChessBoardService.types';

export type Props = {
  editFloorModalState: OpenEditFloorModalPayload;
  handleCloseDownModal: () => void;
  handleSaveFloorChanges: (payload: EditFloorPayload) => void;
  chessboardCreateData: PremiseLocationCreateModel;
};
