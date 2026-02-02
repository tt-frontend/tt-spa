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
import { EPremiseCategory } from 'api/types';

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
  nonLivingPremisesMenuItems,
  handleDivideApartment,
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
                  {floor.premises?.map((apartment, apartmentIndex) => {
                    const isBasePremises = [
                      EPremiseCategory.Apartment,
                    ].includes(apartment.category as EPremiseCategory);

                    return (
                      <ChessboardItem
                        key={String(apartment.number) + apartmentIndex}
                        wide={!isBasePremises}
                        menuButtons={[
                          {
                            title: 'Редактировать помещение',
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
                            hidden: !isBasePremises,
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
                            hidden: !isBasePremises,
                          },
                          {
                            title: 'Разделить квартиру',
                            onClick: () =>
                              handleDivideApartment({
                                floorIndex,
                                apartmentIndex,
                                sectionIndex,
                                apartmentNumber: apartment.number!,
                              }),
                          },
                          {
                            title: 'Удалить помещение',
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
                    );
                  })}
                  {floor.premises?.length === 0 && (
                    <ChessboardItem
                      type="flat"
                      wide
                      menuButtons={nonLivingPremisesMenuItems({
                        floor: floor.number,
                        entrace: section.number,
                      })}
                    >
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
