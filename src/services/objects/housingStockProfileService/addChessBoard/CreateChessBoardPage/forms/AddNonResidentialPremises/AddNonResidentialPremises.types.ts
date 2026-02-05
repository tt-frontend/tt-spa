import {
  AddNonLivingPremisesFormParams,
  Maybe,
  OpenAddNonLivingPremisesPanelState,
} from '../../../addChessBoardService.types';

export type Props = {
  closeEditChessboardPanel: () => void;
  entrances: (number | null)[];
  premiseState: Maybe<OpenAddNonLivingPremisesPanelState>;
  handleAddNonLivingPremises: (payload: AddNonLivingPremisesFormParams) => void;
};
