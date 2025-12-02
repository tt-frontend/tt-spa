import { useUnit } from 'effector-react';
import { FC } from 'react';
import { displayObjectsListService } from './displayObjectsListService.model';
import { ObjectsList } from './view/ObjectsList';
import { SearchObjects } from './view/SearchObjects';
import { HeaderInject } from '../objectsProfileService/view/ObjectsProfile/ObjectsProfile.types';
import { getBuildingsQuery } from './displayObjectsListService.api';
import {
  ListWrapper,
  PaginationWrapper,
  Wrapper,
} from './view/ObjectsList/ObjectsList.styled';
import { Pagination } from 'ui-kit/Pagination';
import { StickyPanel } from 'ui-kit/shared/StickyPanel';

const { HousingStocksGate } = displayObjectsListService.gates;

export const ObjectsListContainer: FC<HeaderInject> = ({ Header }) => {
  const {
    handlePageNumberChanged,
    handleSearch,
    isLoading,
    pagedHousingStocks,
    isBuildingFetched,
  } = useUnit({
    pagedHousingStocks: displayObjectsListService.outputs.$housingStocks,
    isLoading: displayObjectsListService.outputs.$isLoading,
    handlePageNumberChanged: displayObjectsListService.inputs.setPageNumber,
    handleSearch: displayObjectsListService.inputs.searchHosuingStocks,
    isBuildingFetched: getBuildingsQuery.$succeeded,
  });

  const housingStocks = pagedHousingStocks?.items;

  const isNotEmpty = (pagedHousingStocks?.totalPages || 0) > 1;

  return (
    <Wrapper>
      <HousingStocksGate />

      <Header>
        <SearchObjects
          handleSearch={handleSearch}
          isSearchError={isBuildingFetched && !housingStocks?.length}
        />
      </Header>

      <ListWrapper>
        <ObjectsList
          isLoading={isLoading}
          housingStocks={housingStocks}
          isBuildingFetched={isBuildingFetched}
        />
      </ListWrapper>

      {isNotEmpty && !isLoading && pagedHousingStocks?.pageNumber && (
        <StickyPanel>
          <PaginationWrapper>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              current={pagedHousingStocks?.pageNumber}
              onChange={handlePageNumberChanged}
              total={pagedHousingStocks?.totalItems}
              pageSize={pagedHousingStocks?.pageSize}
            />
          </PaginationWrapper>
        </StickyPanel>
      )}
    </Wrapper>
  );
};
