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

  const { building, isLoadingBuilding } = useUnit({
    building: buildingQuery.$data,
    isLoadingBuilding: buildingQuery.$pending,
  });

  const { handleAddEntrance, closeAddEntrancePanel, isAddEntrancePanelOpen } =
    useUnit({
      ...inputs,
      isAddEntrancePanelOpen: outputs.$isAddEntrancePanelOpen,
    });

  return (
    <>
      <ChessBoardGate buildingId={Number(buildingId)} />
      <CreateChessBoardPage
        building={building}
        isLoadingBuilding={isLoadingBuilding}
        handleAddEntrance={handleAddEntrance}
        closeAddEntrancePanel={closeAddEntrancePanel}
        isAddEntrancePanelOpen={isAddEntrancePanelOpen}
      />
    </>
  );
};
