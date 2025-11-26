import { FC } from 'react';
import { Wrapper } from './ChessBoardView.styled';
import { Props } from './ChessBoardView.types';

export const ChessBoardView: FC<Props> = ({ chessboardCreateData }) => {
  console.log(chessboardCreateData);

  return <Wrapper></Wrapper>;
};
