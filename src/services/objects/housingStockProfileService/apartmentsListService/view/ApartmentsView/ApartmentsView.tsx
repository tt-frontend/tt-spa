import { Empty } from 'antd';
import { FC } from 'react';
import { CellsIcon, ListIcon } from 'ui-kit/icons';
import { Segmented } from 'ui-kit/Segmented';
import { components } from './ApartmentsView.constants';
import { HeaderTitle, HeaderWrapper, Wrapper } from './ApartmentsView.styled';
import { ApartmentsViewProps, SegmentType } from './ApartmentsView.types';
import { WithLoader } from 'ui-kit/shared/WithLoader';
import { AddChessBoardPanel } from './AddChessBoardPanel';
import { useUnit } from 'effector-react';
import { developmentSettingsService } from 'services/developmentSettings/developmentSettings.models';
import { PremisesView } from './PremisesView';

export const ApartmentsView: FC<ApartmentsViewProps> = ({
  apartmentsPagedList,
  isLoading,
  hosuingStockId,
  currentSegment,
  setCurrentSegment,
  setCurrentApartmentId,
  currentApartmentId,
  clearCurrentApartmentId,
  apartmentPremises,
  isPremisesLoading,
}) => {
  const ViewComponent = components[currentSegment];

  const featureToggles = useUnit(
    developmentSettingsService.outputs.$featureToggles,
  );

  const isApartmentsListEmpty = apartmentsPagedList?.items?.length === 0;

  const showChessboardView =
    typeof apartmentPremises?.sections?.[0]?.number === 'number' &&
    currentSegment === 'cells' &&
    featureToggles.chessboardCreate;

  return (
    <div>
      <HeaderWrapper>
        <HeaderTitle>Список квартир</HeaderTitle>
        <Segmented<SegmentType>
          active={currentSegment}
          items={[
            {
              name: 'cells',
              icon: <CellsIcon />,
            },
            {
              name: 'list',
              icon: <ListIcon />,
            },
          ]}
          onChange={setCurrentSegment}
        />
      </HeaderWrapper>
      {!showChessboardView && (
        <WithLoader isLoading={isLoading || isPremisesLoading}>
          {apartmentsPagedList?.items && !isApartmentsListEmpty && (
            <ViewComponent
              hosuingStockId={hosuingStockId}
              apartments={apartmentsPagedList.items}
              setCurrentApartmentId={setCurrentApartmentId}
              currentApartmentId={currentApartmentId}
              clearCurrentApartmentId={clearCurrentApartmentId}
            />
          )}
          {isApartmentsListEmpty && featureToggles.chessboardCreate && (
            <AddChessBoardPanel buildingId={hosuingStockId} />
          )}
          {!apartmentsPagedList && (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </WithLoader>
      )}
      {showChessboardView && (
        <Wrapper>
          <PremisesView apartmentPremises={apartmentPremises} />
        </Wrapper>
      )}
    </div>
  );
};
