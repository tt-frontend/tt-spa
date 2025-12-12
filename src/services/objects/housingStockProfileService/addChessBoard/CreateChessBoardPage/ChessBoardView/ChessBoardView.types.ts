import { PremiseLocationCreateModel } from 'api/types';

export type Props = {
  chessboardCreateData: PremiseLocationCreateModel;
  handleDeleteEntrance: (entranceNumber: number) => void;
  handleDuplicateEntrance: (payload: number) => void;
};
