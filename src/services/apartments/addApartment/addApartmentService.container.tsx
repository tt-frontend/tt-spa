import { useParams } from 'react-router-dom';
import { AddApartmentPage } from './AddApartmentPage';
import { addApartmentService } from './addApartmentService.models';
import { useUnit } from 'effector-react';
import { housingStockProfileService } from 'services/objects/housingStockProfileService';

const {
  gates: { AddApartmentGate },
  inputs,
} = addApartmentService;

export const AddApartmentContainer = () => {
  const { handleCreateApartment } = useUnit({
    handleCreateApartment: inputs.handleCreateApartment,
  });

  const { buildingId } = useParams<{ buildingId: string }>();

  const { building } = useUnit({
    building: housingStockProfileService.outputs.$housingStock,
  });

  return (
    <>
      <AddApartmentGate buildingId={Number(buildingId)} />
      <AddApartmentPage
        buildingId={Number(buildingId)}
        building={building}
        handleCreateApartment={handleCreateApartment}
      />
    </>
  );
};
