import { ApartmentCreateRequest } from 'api/types';

export type Props = {
  createApartmentData: ApartmentCreateRequest | null;
  isPreviewModalOpen: boolean;
  closePreviewModal: () => void;
  isCreateLoading: boolean;
  handlePostCreateApartment: () => void;
};
