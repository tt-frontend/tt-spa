import { ReactNode } from 'react';
import { ContextMenuElement } from 'ui-kit/ContextMenuButton/ContextMenuButton.types';

export type ChessBoardItemType = 'shadow' | 'flat' | 'outline' | 'empty';

export type Props = {
  children?: ReactNode;
  type?: ChessBoardItemType;
  wide?: boolean;
  menuButtons?: ContextMenuElement[];
};
