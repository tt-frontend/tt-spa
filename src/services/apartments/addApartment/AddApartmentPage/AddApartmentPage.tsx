import { FC } from 'react';
import { Wrapper } from './AddApartmentPage.styled';
import { Props } from './AddApartmentPage.types';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { GoBack } from 'ui-kit/shared/GoBack';
import { getBuildingAddress } from 'utils/getBuildingAddress';

export const AddApartmentPage: FC<Props> = ({ building }) => {
  return (
    <Wrapper>
      <GoBack />
      <PageHeader
        title="Добавление новой квартиры"
        description={getBuildingAddress(building, true)}
      />
    </Wrapper>
  );
};
