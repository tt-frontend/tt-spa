import { useNavigate, useParams } from 'react-router-dom';
import { AddApartmentPage } from './AddApartmentPage';
import { addApartmentService } from './addApartmentService.models';
import { useUnit } from 'effector-react';
import { housingStockProfileService } from 'services/objects/housingStockProfileService';
import { FinalStageModal } from './AddApartmentPage/FinalStageModal';
import { useEffect } from 'react';

const {
  gates: { AddApartmentGate },
  inputs,
  outputs,
  fx: { createApartmentFx },
} = addApartmentService;

export const AddApartmentContainer = () => {
  const {
    handleCreateApartment,
    createApartmentData,
    isPreviewModalOpen,
    openPreviewModal,
    closePreviewModal,
    isCreateLoading,
    handlePostCreateApartment,
  } = useUnit({
    handleCreateApartment: inputs.handleCreateApartment,
    createApartmentData: outputs.$createApartmentData,
    isPreviewModalOpen: outputs.$isPreviewModalOpen,
    closePreviewModal: inputs.closePreviewModal,
    openPreviewModal: inputs.openPreviewModal,
    isCreateLoading: outputs.$isCreateLoading,
    handlePostCreateApartment: inputs.handlePostCreateApartment,
  });

  const { buildingId } = useParams<{ buildingId: string }>();

  const { building } = useUnit({
    building: housingStockProfileService.outputs.$housingStock,
  });

  const navigate = useNavigate();

  useEffect(() => {
    return createApartmentFx.doneData.watch((data) =>
      navigate(`/apartments/${data.id}/commonData`),
    ).unsubscribe;
  }, [createApartmentFx]);

  return (
    <>
      <AddApartmentGate buildingId={Number(buildingId)} />
      <AddApartmentPage
        buildingId={Number(buildingId)}
        building={building}
        handleCreateApartment={handleCreateApartment}
        openPreviewModal={openPreviewModal}
        createApartmentData={createApartmentData}
      />
      <FinalStageModal
        createApartmentData={createApartmentData}
        isPreviewModalOpen={isPreviewModalOpen}
        closePreviewModal={closePreviewModal}
        isCreateLoading={isCreateLoading}
        handlePostCreateApartment={handlePostCreateApartment}
      />
    </>
  );
};
