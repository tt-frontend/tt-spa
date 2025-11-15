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

export const CreateChessBoardPage: FC<Props> = ({
  building,
  isLoadingBuilding,
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
          />
        </Header>
        <Blueprint></Blueprint>
        <StickyPanel>
          <Button size="s" type="ghost">
            Очистить
          </Button>
          <ButtonsWrapper>
            <Button size="s" type="ghost">
              Отмена
            </Button>
            <Button size="s" wide>
              Сохранить
            </Button>
          </ButtonsWrapper>
        </StickyPanel>
      </Wrapper>
    </>
  );
};
