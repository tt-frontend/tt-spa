import { AddParkingFormParams } from '../../../addChessBoardService.types';

export type Props = {
  closeAddEntrancePanel: () => void;
  handleAddParking: (payload: AddParkingFormParams) => void;
  entrances: (number | null)[];
};
