import { Empty } from 'antd';
import { FC } from 'react';
import { CellsIcon, ListIcon } from 'ui-kit/icons';
import { Segmented } from 'ui-kit/Segmented';
import { components } from './ApartmentsView.constants';
import { HeaderTitle, HeaderWrapper } from './ApartmentsView.styled';
import { ApartmentsViewProps, SegmentType } from './ApartmentsView.types';
import { WithLoader } from 'ui-kit/shared/WithLoader';
import { AddChessBoardPanel } from './AddChessBoardPanel';

export const ApartmentsView: FC<ApartmentsViewProps> = ({
  apartmentsPagedList,
  isLoading,
  hosuingStockId,
  currentSegment,
  setCurrentSegment,
  setCurrentApartmentId,
  currentApartmentId,
  clearCurrentApartmentId,
}) => {
  const ViewComponent = components[currentSegment];

  const isApartmentsListEmpty = apartmentsPagedList?.items?.length === 0;

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
      <WithLoader isLoading={isLoading}>
        {apartmentsPagedList?.items && !isApartmentsListEmpty && (
          <ViewComponent
            hosuingStockId={hosuingStockId}
            apartments={apartmentsPagedList.items}
            setCurrentApartmentId={setCurrentApartmentId}
            currentApartmentId={currentApartmentId}
            clearCurrentApartmentId={clearCurrentApartmentId}
          />
        )}
        {isApartmentsListEmpty && <AddChessBoardPanel />}
        {!apartmentsPagedList && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </WithLoader>
    </div>
  );
};
