import { FC } from 'react';
import {
  EntranceWrapper,
  FloorIndex,
  FloorWrapper,
  Wrapper,
} from './ChessBoardView.styled';
import { Props } from './ChessBoardView.types';
import { ChessboardItem } from './ChessboardItem';

export const ChessBoardView: FC<Props> = ({
  chessboardCreateData,
  handleDeleteEntrance,
}) => {
  return (
    <Wrapper>
      {chessboardCreateData.sections?.map((section) => (
        <EntranceWrapper key={section.sectionNumber}>
          <FloorWrapper hideHover>
            <FloorIndex />
            <ChessboardItem
              wide
              type="outline"
              menuButtons={[
                { title: 'Изменить номер подъезда' },
                { title: 'Дублировать подъезд' },
                {
                  title: 'Удалить подъезд',
                  onClick: () =>
                    section.sectionNumber &&
                    handleDeleteEntrance(section.sectionNumber),
                },
              ]}
            >
              {section.sectionNumber} Подъезд
            </ChessboardItem>
          </FloorWrapper>
          {section.floors?.map((floor) => (
            <FloorWrapper key={floor.floorNumber}>
              <ChessboardItem
                menuButtons={[
                  { title: 'Изменить номер этажа' },
                  { title: 'Дублировать этаж' },
                  { title: 'Удалить этаж' },
                ]}
                type="empty"
              >
                {floor.floorNumber}
              </ChessboardItem>
              {floor.apartmentNumbers?.map((apartment) => (
                <ChessboardItem
                  key={apartment}
                  menuButtons={[
                    { title: 'Изменить номер квартиры' },
                    { title: 'Добавить квартиру справа' },
                    { title: 'Добавить квартиру слева' },
                    { title: 'Удалить квартиру' },
                  ]}
                >
                  {apartment}
                </ChessboardItem>
              ))}
              {floor.apartmentNumbers?.length === 0 && (
                <ChessboardItem type="flat" wide>
                  + Добавьте нежилое помещение
                </ChessboardItem>
              )}
            </FloorWrapper>
          ))}
        </EntranceWrapper>
      ))}
    </Wrapper>
  );
};
