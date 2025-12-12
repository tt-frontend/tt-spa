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
  handleDuplicateEntrance,
}) => {
  return (
    <Wrapper>
      {chessboardCreateData.sections?.map((section) => (
        <EntranceWrapper key={section.number}>
          <FloorWrapper hideHover>
            <FloorIndex />
            <ChessboardItem
              wide
              type="outline"
              menuButtons={[
                { title: 'Изменить номер подъезда' },
                {
                  title: 'Дублировать подъезд',
                  onClick: () =>
                    section.number && handleDuplicateEntrance(section.number),
                },
                {
                  title: 'Удалить подъезд',
                  onClick: () =>
                    section.number && handleDeleteEntrance(section.number),
                },
              ]}
            >
              {section.number} Подъезд
            </ChessboardItem>
          </FloorWrapper>
          {section.floors?.map((floor) => (
            <FloorWrapper key={floor.number}>
              <ChessboardItem
                menuButtons={[
                  { title: 'Изменить номер этажа' },
                  { title: 'Дублировать этаж' },
                  { title: 'Удалить этаж' },
                ]}
                type="empty"
              >
                {floor.number}
              </ChessboardItem>
              {floor.premises?.map((apartment) => (
                <ChessboardItem
                  key={apartment.number}
                  menuButtons={[
                    { title: 'Изменить номер квартиры' },
                    { title: 'Добавить квартиру справа' },
                    { title: 'Добавить квартиру слева' },
                    { title: 'Удалить квартиру' },
                  ]}
                >
                  {apartment.number}
                </ChessboardItem>
              ))}
              {floor.premises?.length === 0 && (
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
