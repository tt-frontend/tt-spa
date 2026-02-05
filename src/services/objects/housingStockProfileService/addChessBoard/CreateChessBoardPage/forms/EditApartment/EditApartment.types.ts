import { PremiseLocationCreateModel } from 'api/types';
import {
  EditApartmentPayload,
  OpenEditApartmentModalPayload,
} from '../../../addChessBoardService.types';

export type Props = {
  editApartmentModalState: OpenEditApartmentModalPayload;
  handleCloseDownModal: () => void;
  handleSaveApartmentChanges: (payload: EditApartmentPayload) => void;
  chessboardCreateData: PremiseLocationCreateModel;
};
