import { ChessboardCreateModel } from 'api/test-types';
import { AddEntranceFormParams } from '../../../addChessBoardService.types';

export type Props = {
  closeAddEntrancePanel: () => void;
  handleAddEntrance: (payload: AddEntranceFormParams) => void;
  chessboardCreateData: ChessboardCreateModel;
};
