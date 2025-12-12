import { AddEntranceFormParams } from '../../../addChessBoardService.types';
import { PremiseLocationCreateModel } from 'api/types';

export type Props = {
  closeAddEntrancePanel: () => void;
  handleAddEntrance: (payload: AddEntranceFormParams) => void;
  chessboardCreateData: PremiseLocationCreateModel;
};
