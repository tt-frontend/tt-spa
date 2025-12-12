import { useParams } from 'react-router-dom';
import { addChessBoardService } from './addChessBoardService.models';
import { CreateChessBoardPage } from './CreateChessBoardPage';
import { useUnit } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';

const {
  inputs,
  outputs,
  gates: { ChessBoardGate },
} = addChessBoardService;

export const AddChessBoardContainer = () => {
  const { buildingId } = useParams<{ buildingId: string }>();

  const {
    closeEditChessboardPanel,
    handleEditChessboard,
    handleAddEntrance,
    handleAddParking,

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
  } = useUnit({
    ...inputs,
    building: buildingQuery.$data,
    isLoadingBuilding: buildingQuery.$pending,
    openPanel: outputs.$openPanel,
    chessboardCreateData: outputs.$chessboardCreateData,
    entrances: outputs.$entrances,
  });

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
        handleAddParking={handleAddParking}
        entrances={entrances}
        handleDeleteEntrance={handleDeleteEntrance}
        handleDuplicateEntrance={handleDuplicateEntrance}
        handleDeleteFloor={handleDeleteFloor}
        handleDuplicateFloor={handleDuplicateFloor}
        handleDeleteApartmnet={handleDeleteApartmnet}
      />
    </>
  );
};
