import React, { FC } from 'react';
import { MenuContainer } from 'services/menuService';
import { MenuWrapper, Wrapper } from './Panel.styled';
import { Logo } from './Logo';
import { MenuType } from 'services/menuService/menuService.types';

export const Panel: FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
  isChevronOpen: boolean;
  allowedMenuTypes?: MenuType[];
}> = ({
  isOpen,
  setIsOpen,
  onMouseLeave,
  onMouseEnter,
  isChevronOpen,
  allowedMenuTypes,
}) => {
  const content = (
    <Wrapper
      isOpen={isOpen}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <Logo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isChevronOpen={isChevronOpen}
      />
      <MenuWrapper>
        <MenuContainer isOpen={isOpen} allowedMenuTypes={allowedMenuTypes} />
      </MenuWrapper>
    </Wrapper>
  );

  return content;
};
