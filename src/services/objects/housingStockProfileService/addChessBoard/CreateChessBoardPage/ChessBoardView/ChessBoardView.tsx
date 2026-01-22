import { FC } from 'react';
import {
  EntranceWrapper,
  FloorIndex,
  FloorWrapper,
  Inner,
  Scroll,
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
  handleDuplicateApartment,
  openEditApartmentModal,
  openEditFloorModal,
  openEditEntranceModal,
}) => {
  useEnterToTab();

  return (
    <Scroll>
      <Inner>
        <Wrapper>
          {chessboardCreateData.sections?.map((section, sectionIndex) => (
            <EntranceWrapper key={String(section.number) + sectionIndex}>
              <FloorWrapper hideHover>
                <FloorIndex />
                <ChessboardItem
                  wide
                  type="outline"
                  menuButtons={[
                    {
                      title: 'Изменить номер подъезда',
                      onClick: () =>
                        openEditEntranceModal({
                          sectionIndex: sectionIndex,
                        }),
                    },
                    {
                      title: 'Дублировать подъезд',
                      onClick: () =>
                        section.number &&
                        handleDuplicateEntrance(section.number),
                    },
                    {
                      title: 'Удалить подъезд',
                      onClick: () =>
                        section.number && handleDeleteEntrance(sectionIndex),
                      color: ContextMenuButtonColor.danger,
                    },
                  ]}
                >
                  {section.number} Подъезд
                </ChessboardItem>
              </FloorWrapper>
              {section.floors?.map((floor, floorIndex) => (
                <FloorWrapper key={String(floor.number) + floorIndex}>
                  <ChessboardItem
                    menuButtons={[
                      {
                        title: 'Изменить номер этажа',
                        onClick: () =>
                          openEditFloorModal({
                            sectionIndex: sectionIndex,
                            floorIndex: floorIndex,
                          }),
                      },
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
                            index: floorIndex,
                          }),
                        color: ContextMenuButtonColor.danger,
                      },
                    ]}
                    type="empty"
                  >
                    {floor.number}
                  </ChessboardItem>
                  {floor.premises?.map((apartment, apartmentIndex) => (
                    <ChessboardItem
                      key={String(apartment.number) + apartmentIndex}
                      menuButtons={[
                        {
                          title: 'Изменить номер квартиры',
                          onClick: () =>
                            openEditApartmentModal({
                              sectionIndex: sectionIndex,
                              floorIndex: floorIndex,
                              apartmentIndex: apartmentIndex,
                            }),
                        },
                        {
                          title: 'Добавить квартиру слева',
                          onClick: () =>
                            handleDuplicateApartment({
                              floorNumber: floor.number,
                              sectionNumber: section.number,
                              apartmentNumber: apartment.number,
                              side: 'left',
                            }),
                        },
                        {
                          title: 'Добавить квартиру справа',
                          onClick: () =>
                            handleDuplicateApartment({
                              floorNumber: floor.number,
                              sectionNumber: section.number,
                              apartmentNumber: apartment.number,
                              side: 'right',
                            }),
                        },
                        {
                          title: 'Удалить квартиру',
                          color: ContextMenuButtonColor.danger,
                          onClick: () =>
                            handleDeleteApartmnet({
                              sectionNumber: section.number,
                              floorNumber: floor.number,
                              apartmentNumber: apartment.number,
                              index: apartmentIndex,
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
      </Inner>
    </Scroll>
  );
};
