import { FC } from 'react';
import { Content, Footer, Header, Wrapper } from './BlueprintPanel.styled';
import { Props } from './BlueprintPanel.types';

export const BlueprintPanel: FC<Props> = ({ children, title, footer }) => {
  return (
    <Wrapper>
      {title && <Header>{title}</Header>}
      <Content isTitle={Boolean(title)}>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
};
