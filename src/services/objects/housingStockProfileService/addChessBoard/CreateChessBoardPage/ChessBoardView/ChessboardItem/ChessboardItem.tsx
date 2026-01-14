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
  if (!menuButtons)
    return (
      <Wrapper type={type} wide={wide}>
        {children}
      </Wrapper>
    );

  return (
    <ContextMenuButton wide={wide} menuButtons={menuButtons}>
      {(isOpen) => (
        <Wrapper type={type} wide={wide} active={isOpen}>
          {children}
        </Wrapper>
      )}
    </ContextMenuButton>
  );
};
