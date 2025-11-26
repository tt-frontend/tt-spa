import { FC } from 'react';
import { Wrapper } from './StickyPanel.styled';
import { Props } from './StickyPanel.types';

export const StickyPanel: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
