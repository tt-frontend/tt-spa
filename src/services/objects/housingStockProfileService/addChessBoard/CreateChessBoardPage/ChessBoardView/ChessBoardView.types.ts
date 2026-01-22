import { PremiseLocationCreateModel } from 'api/types';
import {
  AddAapartmentPayload,
  DeleteAapartmentPayload,
  DeleteFloorPayload,
  DuplicateFloorPayload,
} from '../../addChessBoardService.types';

export type Props = {
  chessboardCreateData: PremiseLocationCreateModel;
  handleDeleteEntrance: (entranceNumber: number) => void;
  handleDuplicateEntrance: (payload: number) => void;
  handleDeleteFloor: (payload: DeleteFloorPayload) => void;
  handleDuplicateFloor: (payload: DuplicateFloorPayload) => void;
  handleDeleteApartmnet: (payload: DeleteAapartmentPayload) => void;
  handleDuplicateApartment: (payload: AddAapartmentPayload) => void;
};
