import { FC } from 'react';
import {
  Blueprint,
  ButtonsWrapper,
  Header,
  StickyPanel,
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
import { AddEntrancePanel } from './AddEntrancePanel';

export const CreateChessBoardPage: FC<Props> = ({
  building,
  isLoadingBuilding,
  isAddEntrancePanelOpen,
  handleAddEntrance,
  closeAddEntrancePanel,
}) => {
  return (
    <>
      <Wrapper>
        <Header>
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
                    onClick: handleAddEntrance,
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
        </Header>
        <Blueprint>
          {isAddEntrancePanelOpen && (
            <AddEntrancePanel closeAddEntrancePanel={closeAddEntrancePanel} />
          )}
        </Blueprint>
        <StickyPanel>
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
      </Wrapper>
    </>
  );
};
