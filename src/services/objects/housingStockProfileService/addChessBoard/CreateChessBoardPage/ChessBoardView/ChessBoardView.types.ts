import { ChessboardCreateModel } from 'api/test-types';

export type Props = {
  chessboardCreateData: ChessboardCreateModel;
  handleDeleteEntrance: (entranceNumber: number) => void;
  handleDuplicateEntrance: (payload: number) => void;
};
