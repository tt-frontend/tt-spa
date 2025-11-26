import { FC } from 'react';
import { Wrapper } from './ChessboardItem.styled';
import { Props } from './ChessboardItem.types';

export const ChessboardItem: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
