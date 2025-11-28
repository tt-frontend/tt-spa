import { Menu, Dropdown } from 'antd';
import React, { FC, ReactNode, useState } from 'react';
import { MoreIcon } from 'ui-kit/icons';
import {
  ContextMenuButtonProps,
  ContextMenuElement,
} from './ContextMenuButton.types';
import {
  ChevronSC,
  MenuItem,
  MenuItemTitle,
  StyledMenuButton,
} from './ContextMenuButton.styled';
import { getButtonColor } from './ContextMenuButton.utils';

const getMenuButtons = (props: {
  menuButtons: ContextMenuElement[];
  handleClose: () => void;
  openedButtons: string[];
  toggle: (id: string) => void;
  level: number;
}): ReactNode[] => {
  const { menuButtons, handleClose, openedButtons, toggle, level } = props;

  return menuButtons.map((button, index) => {
    const { title, onClick, color, id = '', icon, strong } = button;

    const currentColor = getButtonColor(color);

    const isOpened = Boolean(id && openedButtons.includes(id));

    const children =
      button.children && isOpened
        ? getMenuButtons({
            ...props,
            menuButtons: button.children,
            level: level + 1,
          })
        : [];

    return [
      <MenuItem
        key={index + id}
        onClick={() => {
          if (button.children) {
            if (id) toggle(id);
          } else {
            handleClose();
          }

          onClick?.();
        }}
        color={currentColor}
      >
        <MenuItemTitle strong={strong} level={level}>
          {icon}
          {title}
        </MenuItemTitle>
        {button.children && <ChevronSC isOpen={isOpened} />}
      </MenuItem>,
      ...children,
    ];
  });
};

export const ContextMenuButton: FC<ContextMenuButtonProps> = (props) => {
  const {
    menuButtons,
    disabled,
    size,
    children = null,
    icon = null,
    wide,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const [openedButtons, setOpenedButtons] = useState<string[]>([]);

  const menuButtonsFiltered = menuButtons?.filter(({ hidden }) => !hidden);

  const menu = () => (
    <Menu
      onClick={(e) => {
        (
          e.domEvent as unknown as { stopImmediatePropagation(): void }
        ).stopImmediatePropagation();
      }}
    >
      {menuButtonsFiltered &&
        getMenuButtons({
          level: 0,
          menuButtons: menuButtonsFiltered,
          handleClose: () => setIsVisible(false),
          openedButtons,
          toggle: (id: string) => {
            setOpenedButtons((prev) => {
              if (prev.includes(id)) {
                return prev.filter((elem) => elem !== id);
              }

              return [...prev, id];
            });
          },
        })}
    </Menu>
  );

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ width: wide ? '100%' : '' }}
    >
      <Dropdown
        dropdownRender={menu}
        disabled={disabled}
        open={isVisible}
        trigger={['click']}
        onOpenChange={(visible) => setIsVisible(visible)}
      >
        <>
          {Boolean(children) && (
            <div
              style={{ width: wide ? '100%' : '' }}
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {children?.(isVisible)}
            </div>
          )}

          {!children && (
            <StyledMenuButton
              size={size}
              onClick={(e) => {
                e.preventDefault();
                setIsVisible(true);
              }}
            >
              {icon ?? <MoreIcon />}
            </StyledMenuButton>
          )}
        </>
      </Dropdown>
    </div>
  );
};
