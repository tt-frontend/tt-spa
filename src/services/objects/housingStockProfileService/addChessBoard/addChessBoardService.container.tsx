import { useNavigate, useParams } from 'react-router-dom';
import { addChessBoardService } from './addChessBoardService.models';
import { CreateChessBoardPage } from './CreateChessBoardPage';
import { useUnit } from 'effector-react';
import {
  buildingQuery,
  createChessBoardMutation,
} from './addChessBoardService.api';
import { useEffect } from 'react';
import { message } from 'antd';

const {
  inputs,
  outputs,
  gates: { ChessBoardGate },
} = addChessBoardService;

export const AddChessBoardContainer = () => {
  const { buildingId } = useParams<{ buildingId: string }>();

  const navigate = useNavigate();

  const {
    closeEditChessboardPanel,
    handleEditChessboard,
    handleAddEntrance,
    building,
    isLoadingBuilding,
    openPanel,
    chessboardCreateData,
    entrances,
    handleDeleteEntrance,
    handleDuplicateEntrance,
    handleDeleteFloor,
    handleDuplicateFloor,
    handleDeleteApartmnet,
    handleDuplicateApartment,
    openEditApartmentModal,
    handleCloseDownModal,
    createChessboard,
    isLoadingCreate,
    editApartmentModalState,
    handleSaveApartmentChanges,
    openEditFloorModal,
    handleSaveFloorChanges,
    editFloorModalState,
    openEditEntranceModal,
    handleSaveEntranceChanges,
    editEntranceModalState,
    openAddNonLivingPremisesState,
    openAddNonLivingPremisesPanel,
  } = useUnit({
    ...inputs,
    building: buildingQuery.$data,
    isLoadingBuilding: buildingQuery.$pending,
    openPanel: outputs.$openPanel,
    chessboardCreateData: outputs.$chessboardCreateData,
    entrances: outputs.$entrances,
    createChessboard: createChessBoardMutation.start,
    isLoadingCreate: createChessBoardMutation.$pending,
    editApartmentModalState: outputs.$editApartmentModalState,
    editFloorModalState: outputs.$editFloorModalState,
    editEntranceModalState: outputs.$editEntranceModalState,
    openAddNonLivingPremisesState: outputs.$openAddNonLivingPremisesState,
  });

  function handleSaveChessboard() {
    createChessboard({
      ...chessboardCreateData,
      housingStockId: Number(buildingId),
    });
  }

  useEffect(() => {
    return createChessBoardMutation.finished.success.watch(() => {
      message.success('Шахматка успешно создана!');
      navigate(-1);
    }).unsubscribe;
  }, []);

  return (
    <>
      <ChessBoardGate buildingId={Number(buildingId)} />
      <CreateChessBoardPage
        building={building}
        isLoadingBuilding={isLoadingBuilding}
        handleEditChessboard={handleEditChessboard}
        closeEditChessboardPanel={closeEditChessboardPanel}
        openPanel={openPanel}
        chessboardCreateData={chessboardCreateData}
        handleAddEntrance={handleAddEntrance}
        entrances={entrances}
        handleDeleteEntrance={handleDeleteEntrance}
        handleDuplicateEntrance={handleDuplicateEntrance}
        handleDeleteFloor={handleDeleteFloor}
        handleDuplicateFloor={handleDuplicateFloor}
        handleDeleteApartmnet={handleDeleteApartmnet}
        handleDuplicateApartment={handleDuplicateApartment}
        handleSaveChessboard={handleSaveChessboard}
        isLoadingCreate={isLoadingCreate}
        editApartmentModalState={editApartmentModalState}
        openEditApartmentModal={openEditApartmentModal}
        handleCloseDownModal={handleCloseDownModal}
        handleSaveApartmentChanges={handleSaveApartmentChanges}
        openEditFloorModal={openEditFloorModal}
        handleSaveFloorChanges={handleSaveFloorChanges}
        editFloorModalState={editFloorModalState}
        openEditEntranceModal={openEditEntranceModal}
        handleSaveEntranceChanges={handleSaveEntranceChanges}
        editEntranceModalState={editEntranceModalState}
        openAddNonLivingPremisesState={openAddNonLivingPremisesState}
        openAddNonLivingPremisesPanel={openAddNonLivingPremisesPanel}
      />
    </>
  );
};
