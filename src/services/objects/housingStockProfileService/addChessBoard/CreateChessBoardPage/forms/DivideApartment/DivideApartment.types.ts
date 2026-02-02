import {
  DivideApartmentModalState,
  DivideApartmentPayload,
} from '../../../addChessBoardService.types';

export type Props = {
  divideApartmnentModalState: DivideApartmentModalState | null;
  handleCloseDownModal: () => void;
  handleSaveDivideApartment: (payload: DivideApartmentPayload) => void;
};
