import { PremiseLocationCreateModel } from 'api/types';
import { DeleteFloorPayload } from '../../addChessBoardService.types';

export type Props = {
  chessboardCreateData: PremiseLocationCreateModel;
  handleDeleteEntrance: (entranceNumber: number) => void;
  handleDuplicateEntrance: (payload: number) => void;
  handleDeleteFloor: (payload: DeleteFloorPayload) => void;
};
