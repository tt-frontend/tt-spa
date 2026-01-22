import { FC } from 'react';
import {
  Blueprint,
  EntranceWrapper,
  FloorIndex,
  FloorWrapper,
  Inner,
  Scroll,
  Wrapper,
} from './PremisesView.styled';
import { Props } from './PremisesView.types';
import { ChessboardItem } from 'services/objects/housingStockProfileService/addChessBoard/CreateChessBoardPage/ChessBoardView/ChessboardItem';
import { useNavigate } from 'react-router-dom';

export const PremisesView: FC<Props> = ({ apartmentPremises }) => {
  const navigate = useNavigate();

  return (
    <Blueprint>
      <Scroll>
        <Inner>
          <Wrapper>
            {apartmentPremises.sections?.map((section, index) => (
              <EntranceWrapper key={String(section.number) + index}>
                <FloorWrapper hideHover>
                  <FloorIndex />
                  <ChessboardItem wide type="outline">
                    {section.number} Подъезд
                  </ChessboardItem>
                </FloorWrapper>
                {section.floors?.map((floor, index) => (
                  <FloorWrapper key={String(floor.number) + index}>
                    <ChessboardItem type="empty">{floor.number}</ChessboardItem>
                    {floor.premises?.map((apartment, index) => (
                      <ChessboardItem
                        key={String(apartment.number) + index}
                        menuButtons={[
                          {
                            title: 'Перейти',
                            onClick: () =>
                              navigate(`/apartments/${apartment.id}`),
                          },
                        ]}
                      >
                        {apartment.number}
                      </ChessboardItem>
                    ))}
                  </FloorWrapper>
                ))}
              </EntranceWrapper>
            ))}
          </Wrapper>
        </Inner>
      </Scroll>
    </Blueprint>
  );
};
