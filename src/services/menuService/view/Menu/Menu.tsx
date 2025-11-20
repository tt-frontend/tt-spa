import { FC } from 'react';
import { ExitButton } from './ExitButton';
import { MenuProps } from './Menu.types';
import { MenuItemComponent } from './MenuItemComponent';
import {
  Badge,
  DevSettingsButton,
  ExitButtonWrapper,
  Footer,
  MenuItemWrapper,
  UserGuideLink,
} from './Menu.styled';
import { APP_VERSION } from 'constants/version';
import { isDevMode } from 'constants/devMode';

export const Menu: FC<MenuProps> = ({
  menuItems,
  openDevSettingsModal,
  isOpen,
}) => {
  return (
    <div>
      <MenuItemWrapper>
        {menuItems.map((menuItem) => (
          <MenuItemComponent
            menuItem={menuItem}
            key={menuItem.path}
            isMenuOpen={isOpen}
          />
        ))}
      </MenuItemWrapper>
      <Footer>
        <ExitButtonWrapper>
          <ExitButton isOpen={isOpen} />
          {isDevMode && isOpen && (
            <DevSettingsButton onClick={openDevSettingsModal}>
              🛠️ dev
            </DevSettingsButton>
          )}
          {!isDevMode && isOpen && <Badge>{APP_VERSION}</Badge>}
        </ExitButtonWrapper>
        {isOpen && (
          <UserGuideLink target="_blank" href="https://ttplatform.ru/help">
            Руководство пользователя
          </UserGuideLink>
        )}
      </Footer>
    </div>
  );
};
