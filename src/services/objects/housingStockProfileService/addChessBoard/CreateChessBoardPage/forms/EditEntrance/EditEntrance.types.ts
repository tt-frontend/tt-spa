import { PremiseLocationCreateModel } from 'api/types';
import {
  EditEntrancePayload,
  OpenEditEntranceModalPayload,
} from '../../../addChessBoardService.types';

export type Props = {
  chessboardCreateData: PremiseLocationCreateModel;
  handleCloseDownModal: () => void;
  handleSaveEntranceChanges: (payload: EditEntrancePayload) => void;
  editEntranceModalState: OpenEditEntranceModalPayload;
};
