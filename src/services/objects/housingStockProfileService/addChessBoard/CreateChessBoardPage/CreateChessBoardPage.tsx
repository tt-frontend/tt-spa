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

export const CreateChessBoardPage: FC<Props> = () => {
  return (
    <>
      <Blueprint></Blueprint>
      <Wrapper>
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
        <Header>
          <GoBack />
          50 лет Октября, 25, корпус А
          <ContextMenuButton
            size="small"
            icon={<PlusIcon style={{ transform: 'scale(0.8)' }} />}
          />
        </Header>
      </Wrapper>
    </>
  );
};
