import { FC } from 'react';
import {
  Blueprint,
  ButtonsWrapper,
  headerStyles,
  stickyPanelStyles,
  Wrapper,
} from './CreateChessBoardPage.styled';
import { Props } from './CreateChessBoardPage.types';
import { GoBack } from 'ui-kit/shared/GoBack';
import { ContextMenuButton } from 'ui-kit/ContextMenuButton';
import { PlusIcon } from 'ui-kit/icons';
import { Button } from 'ui-kit/Button';
import { getBuildingAddress } from 'utils/getBuildingAddress';
import { Skeleton } from 'antd';
import { ApartmentIcon } from './assets/ApartmentIcon';
import { ParkingIcon } from './assets/ParkingIcon';
import { AddEntrancePanel } from './forms/AddEntrancePanel';
import { ChessBoardView } from './ChessBoardView';
import { StickyPanel } from 'ui-kit/shared/StickyPanel';
import { useUnit } from 'effector-react';
import { layoutService } from 'App/layout/layoutService.models';
import { AddParking } from './forms/AddParking';

export const CreateChessBoardPage: FC<Props> = ({
  building,
  isLoadingBuilding,
  openPanel,
  closeEditChessboardPanel,
  handleEditChessboard,
  chessboardCreateData,
  handleAddEntrance,
  handleAddParking,
  entrances,
}) => {
  const { isPanelOpen } = useUnit({
    isPanelOpen: layoutService.outputs.$isSidePanelOpen,
  });

  return (
    <>
      <StickyPanel css={headerStyles}>
        <GoBack />
        {isLoadingBuilding && <Skeleton.Input active size="small" />}
        {!isLoadingBuilding && getBuildingAddress(building, true)}
        <ContextMenuButton
          size="small"
          icon={<PlusIcon style={{ transform: 'scale(0.8)' }} />}
          menuButtons={[
            {
              title: 'Добавить элемент подъезда',
              icon: <ApartmentIcon />,
              strong: true,
              id: 'add-entrance-element',
              children: [
                {
                  title: 'Подъезд',
                  id: 'entrance',
                  onClick: () => handleEditChessboard('add-entrance'),
                },
                {
                  title: 'Жилой этаж',
                  id: 'residential-floor',
                },
              ],
            },
            {
              title: 'Добавить нежилое помещение',
              icon: <ParkingIcon />,
              strong: true,
              id: 'add-non-residential-placement',
              children: [
                {
                  title: 'Паркинг',
                  id: 'parking',
                  onClick: () => handleEditChessboard('add-parking'),
                },
                {
                  title: 'Техническое помещение',
                  id: 'technical-placement',
                },
                {
                  title: 'Тепловой пункт',
                  id: 'heating-point',
                },
                {
                  title: 'Коммерческое помещение',
                  id: 'commercial-placement',
                },
                {
                  title: 'Подвал',
                  id: 'basement',
                },
                {
                  title: 'Чердак',
                  id: 'attic',
                },
              ],
            },
          ]}
        />
      </StickyPanel>
      <Wrapper isPanelOpen={isPanelOpen}>
        <Blueprint>
          {openPanel === 'add-entrance' && (
            <AddEntrancePanel
              closeAddEntrancePanel={closeEditChessboardPanel}
              handleAddEntrance={handleAddEntrance}
            />
          )}
          {openPanel === 'add-parking' && (
            <AddParking
              closeAddEntrancePanel={closeEditChessboardPanel}
              handleAddParking={handleAddParking}
              entrances={entrances}
            />
          )}
          <ChessBoardView chessboardCreateData={chessboardCreateData} />
        </Blueprint>
      </Wrapper>
      <StickyPanel css={stickyPanelStyles}>
        <Button size="s" type="ghost">
          Очистить
        </Button>
        <ButtonsWrapper>
          <Button size="s" type="ghost">
            Отмена
          </Button>
          <Button size="s" wide disabled>
            Сохранить
          </Button>
        </ButtonsWrapper>
      </StickyPanel>
    </>
  );
};
