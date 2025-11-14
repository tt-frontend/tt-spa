import { FC } from 'react';
import {
  Description,
  Layout,
  Title,
  Wrapper,
} from './AddChessBoardPanel.styled';
import { Props } from './AddChessBoardPanel.types';
import { ApartmentLargeIcon } from 'ui-kit/icons';
import { Button } from 'ui-kit/Button';
import { Link } from 'react-router-dom';

export const AddChessBoardPanel: FC<Props> = ({ buildingId }) => {
  return (
    <Layout>
      <Wrapper>
        <ApartmentLargeIcon />
        <Title>Шахматка дома пока не создана</Title>
        <Description>
          Построить шахматку дома можно вручную, задав параметры квартир и
          подъездов
        </Description>
        <Link to={`/buildings/${buildingId}/addChessBoard`}>
          <Button size="m">Создать шахматку</Button>
        </Link>
      </Wrapper>
    </Layout>
  );
};
