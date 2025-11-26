import { AddEntranceFormParams } from '../../addChessBoardService.types';

export type Props = {
  closeAddEntrancePanel: () => void;
  handleAddEntrance: (payload: AddEntranceFormParams) => void;
};
