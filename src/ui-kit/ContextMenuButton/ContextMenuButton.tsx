import { Menu, Dropdown } from 'antd';
import { FC, ReactNode, useState } from 'react';
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

export const ContextMenuButton: FC<ContextMenuButtonProps> = ({
  menuButtons,
  disabled,
  size,
  children = null,
  icon = null,
  wide,
  onClickOverload,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openedButtons, setOpenedButtons] = useState<string[]>([]);

  const menuButtonsFiltered = menuButtons?.filter(({ hidden }) => !hidden);

  const menu = () => (
    <Menu
      onClick={(e) =>
        (
          e.domEvent as unknown as { stopImmediatePropagation(): void }
        ).stopImmediatePropagation()
      }
    >
      {menuButtonsFiltered &&
        getMenuButtons({
          level: 0,
          menuButtons: menuButtonsFiltered,
          handleClose: () => setIsVisible(false),
          openedButtons,
          toggle: (id: string) => {
            setOpenedButtons((prev) =>
              prev.includes(id)
                ? prev.filter((elem) => elem !== id)
                : [...prev, id],
            );
          },
        })}
    </Menu>
  );

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClickOverload) {
      onClickOverload();
    } else {
      setIsVisible((prev) => !prev);
    }
  };

  const content = (
    <>
      {children ? (
        <div style={{ width: wide ? '100%' : undefined }} onClick={handleClick}>
          {children(isVisible)}
        </div>
      ) : (
        <StyledMenuButton size={size} onClick={handleClick}>
          {icon ?? <MoreIcon />}
        </StyledMenuButton>
      )}
    </>
  );

  // Если есть onClickOverload, не используем Dropdown, просто рендерим контент
  if (onClickOverload) {
    return <div style={{ width: wide ? '100%' : undefined }}>{content}</div>;
  }

  return (
    <Dropdown
      dropdownRender={menu}
      disabled={disabled}
      open={isVisible}
      trigger={['click']}
      onOpenChange={(visible) => setIsVisible(visible)}
    >
      {content}
    </Dropdown>
  );
};
