import { FC } from 'react';
import { Blueprint, Header, Wrapper } from './CreateChessBoardPage.styled';
import { Props } from './CreateChessBoardPage.types';
import { GoBack } from 'ui-kit/shared/GoBack';
import { ContextMenuButton } from 'ui-kit/ContextMenuButton';
import { PlusIcon } from 'ui-kit/icons';

export const CreateChessBoardPage: FC<Props> = () => {
  return (
    <Wrapper>
      <Header>
        <GoBack />
        50 лет Октября, 25, корпус А
        <ContextMenuButton
          size="small"
          icon={<PlusIcon style={{ transform: 'scale(0.8)' }} />}
        />
      </Header>
      <Blueprint></Blueprint>
    </Wrapper>
  );
};
