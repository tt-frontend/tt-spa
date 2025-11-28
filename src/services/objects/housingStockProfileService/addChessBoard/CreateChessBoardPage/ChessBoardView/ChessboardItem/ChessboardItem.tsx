import { FC } from 'react';
import { Wrapper } from './ChessboardItem.styled';
import { Props } from './ChessboardItem.types';
import { ContextMenuButton } from 'ui-kit/ContextMenuButton';

export const ChessboardItem: FC<Props> = ({
  children,
  type = 'shadow',
  wide,
  menuButtons,
}) => {
  return (
    <ContextMenuButton menuButtons={menuButtons}>
      {(isOpen) => (
        <Wrapper type={type} wide={wide} active={isOpen}>
          {children}
        </Wrapper>
      )}
    </ContextMenuButton>
  );
};
