import { useParams } from 'react-router-dom';
import { addChessBoardService } from './addChessBoardService.models';
import { CreateChessBoardPage } from './CreateChessBoardPage';
import { useUnit } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';

const {
  gates: { ChessBoardGate },
} = addChessBoardService;

export const AddChessBoardContainer = () => {
  const { buildingId } = useParams<{ buildingId: string }>();

  const { building, isLoadingBuilding } = useUnit({
    building: buildingQuery.$data,
    isLoadingBuilding: buildingQuery.$pending,
  });

  return (
    <>
      <ChessBoardGate buildingId={Number(buildingId)} />
      <CreateChessBoardPage
        building={building}
        isLoadingBuilding={isLoadingBuilding}
      />
    </>
  );
};
