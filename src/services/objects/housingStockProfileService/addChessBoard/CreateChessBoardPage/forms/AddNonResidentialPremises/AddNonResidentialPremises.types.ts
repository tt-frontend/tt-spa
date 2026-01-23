import { NonLivingPremisesCategory } from '../../../addChessBoardService.types';

export type Props = {
  closeEditChessboardPanel: () => void;
  entrances: (number | null)[];
  premiseCategory: NonLivingPremisesCategory;
};
