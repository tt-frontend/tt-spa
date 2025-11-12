import { FC } from 'react';
import { Body, Header, Title, Wrapper } from './Panel.styled';
import { Props } from './Panel.types';
import { LinkButton } from 'ui-kit/shared/LinkButton';

export const Panel: FC<Props> = ({ title, children, padding }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <LinkButton onClick={() => void 0} fontSize={14} chevron>
          Подробнее
        </LinkButton>
      </Header>
      <Body padding={padding}>{children}</Body>
    </Wrapper>
  );
};
