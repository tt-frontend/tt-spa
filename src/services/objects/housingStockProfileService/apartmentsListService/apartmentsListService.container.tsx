import { useUnit } from 'effector-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { apartmentsListService } from './apartmentsListService.model';
import { ApartmentsView } from './view/ApartmentsView';
import { apartmentPremisesQuery } from './apartmentsListService.api';

const { outputs, inputs, gates } = apartmentsListService;
const { ApartmentsListGate } = gates;

export const ApartmentsListContainer = () => {
  const { buildingId } = useParams<{ buildingId: string }>();

  const {
    apartmentsPagedList,
    clearCurrentApartmentId,
    currentApartmentId,
    currentSegment,
    isLoading,
    setCurrentApartmentId,
    setCurrentSegment,
    apartmentPremises,
  } = useUnit({
    apartmentsPagedList: outputs.$apartmentsPagedList,
    isLoading: outputs.$isLoading,
    currentApartmentId: outputs.$currentApartmentId,
    currentSegment: outputs.$currentSegment,
    setCurrentSegment: inputs.setCurrentSegment,
    setCurrentApartmentId: inputs.setCurrentApartmentId,
    clearCurrentApartmentId: inputs.clearCurrentApartmentId,
    apartmentPremises: apartmentPremisesQuery.$data,
  });

  return (
    <>
      <ApartmentsListGate housingStockId={Number(buildingId)} />
      <ApartmentsView
        hosuingStockId={Number(buildingId)}
        isLoading={isLoading}
        apartmentsPagedList={apartmentsPagedList}
        setCurrentSegment={setCurrentSegment}
        currentSegment={currentSegment}
        setCurrentApartmentId={setCurrentApartmentId}
        currentApartmentId={currentApartmentId}
        clearCurrentApartmentId={() => clearCurrentApartmentId()}
        apartmentPremises={apartmentPremises}
      />
    </>
  );
};
