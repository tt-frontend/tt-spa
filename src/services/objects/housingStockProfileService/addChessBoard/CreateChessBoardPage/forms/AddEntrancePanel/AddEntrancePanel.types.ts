import { AddEntranceFormParams } from '../../../addChessBoardService.types';
import { HousingStockResponse, PremiseLocationCreateModel } from 'api/types';

export type Props = {
  closeAddEntrancePanel: () => void;
  handleAddEntrance: (payload: AddEntranceFormParams) => void;
  chessboardCreateData: PremiseLocationCreateModel;
  building: HousingStockResponse | null;
};
