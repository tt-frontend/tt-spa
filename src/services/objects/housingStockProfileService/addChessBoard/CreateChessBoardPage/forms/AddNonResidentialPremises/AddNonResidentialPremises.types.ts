import {
  AddNonLivingPremisesFormParams,
  NonLivingPremisesCategory,
} from '../../../addChessBoardService.types';

export type Props = {
  closeEditChessboardPanel: () => void;
  entrances: (number | null)[];
  premiseCategory: NonLivingPremisesCategory;
  handleAddNonLivingPremises: (payload: AddNonLivingPremisesFormParams) => void;
};
