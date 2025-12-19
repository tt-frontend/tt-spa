import { FC } from 'react';
import {
  EntranceWrapper,
  FloorIndex,
  FloorWrapper,
  Wrapper,
} from './ChessBoardView.styled';
import { Props } from './ChessBoardView.types';
import { ChessboardItem } from './ChessboardItem';
import { ContextMenuButtonColor } from 'ui-kit/ContextMenuButton/ContextMenuButton.types';
import { useEnterToTab } from 'hooks/useEnterAsTab';

export const ChessBoardView: FC<Props> = ({
  chessboardCreateData,
  handleDeleteEntrance,
  handleDuplicateEntrance,
  handleDeleteFloor,
  handleDuplicateFloor,
  handleDeleteApartmnet,
}) => {
  useEnterToTab();

  return (
    <Wrapper>
      {chessboardCreateData.sections?.map((section, index) => (
        <EntranceWrapper key={String(section.number) + index}>
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
                  color: ContextMenuButtonColor.danger,
                },
              ]}
            >
              {section.number} Подъезд
            </ChessboardItem>
          </FloorWrapper>
          {section.floors?.map((floor, index) => (
            <FloorWrapper key={String(floor.number) + index}>
              <ChessboardItem
                menuButtons={[
                  { title: 'Изменить номер этажа' },
                  {
                    title: 'Дублировать этаж',
                    onClick: () =>
                      handleDuplicateFloor({
                        floorNumber: floor.number,
                        sectionNumber: section.number,
                      }),
                  },
                  {
                    title: 'Удалить этаж',
                    onClick: () =>
                      handleDeleteFloor({
                        floorNumber: floor.number,
                        sectionNumber: section.number,
                      }),
                    color: ContextMenuButtonColor.danger,
                  },
                ]}
                type="empty"
              >
                {floor.number}
              </ChessboardItem>
              {floor.premises?.map((apartment, index) => (
                <ChessboardItem
                  key={String(apartment.number) + index}
                  menuButtons={[
                    { title: 'Изменить номер квартиры' },
                    { title: 'Добавить квартиру справа' },
                    { title: 'Добавить квартиру слева' },
                    {
                      title: 'Удалить квартиру',
                      color: ContextMenuButtonColor.danger,
                      onClick: () =>
                        handleDeleteApartmnet({
                          sectionNumber: section.number,
                          floorNumber: floor.number,
                          apartmentNumber: apartment.number,
                        }),
                    },
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
