import { ReactNode } from 'react';

export type ChessBoardItemType = 'shadow' | 'flat' | 'outline' | 'empty';

export type Props = {
  children?: ReactNode;
  type?: ChessBoardItemType;
  wide?: boolean;
};
