import React, { FC, useMemo } from 'react';
import { useUnit } from 'effector-react';
import { useMenuItems } from './menuService.hook';
import { menuService } from './menuService.model';
import { filterMenuItems } from './menuService.utils';
import { Menu } from './view/Menu';
import { UserInfo } from './view/UserInfo';
import { hidden, privates } from './menuService.constants';
import { developmentSettingsService } from 'services/developmentSettings/developmentSettings.models';
import { DevelopmentSettingsContainer } from 'services/developmentSettings/developmentSettings.container';
import { currentOrganizationService } from 'services/currentOrganizationService';
import { MenuContainerProps } from './menuService.types';

const { outputs, gates } = menuService;
const { UserRolesGate } = gates;

export const MenuContainer: FC<MenuContainerProps> = ({
  isOpen,
  allowedMenuTypes,
}) => {
  const {
    currentUser,
    isCurrentUserLoading,
    openDevSettingsModal,
    currentManagingFirm,
  } = useUnit({
    currentUser: outputs.$currentUser,
    isCurrentUserLoading: outputs.$isCurrentUserLoading,
    openDevSettingsModal:
      developmentSettingsService.inputs.openDevSettingsModal,
    currentManagingFirm:
      currentOrganizationService.outputs.$currentManagingFirm,
  });

  const menuItems = useMenuItems();
  const userRoles = useMemo(() => currentUser?.roles, [currentUser]);

  const filteredMenuItems = useMemo(() => {
    if (!userRoles) return [];

    const items = filterMenuItems(
      menuItems,
      privates,
      hidden,
      userRoles.map((elem) => elem.key!),
    );

    if (!allowedMenuTypes?.length) {
      return items;
    }

    return items.filter((item) => allowedMenuTypes.includes(item.type));
  }, [menuItems, userRoles, allowedMenuTypes]);

  return (
    <>
      <DevelopmentSettingsContainer isAuth />
      <UserRolesGate />
      <UserInfo
        isOpen={isOpen}
        isLoading={isCurrentUserLoading}
        currentUser={currentUser}
        currentManagingFirm={currentManagingFirm}
      />
      <Menu
        isOpen={isOpen}
        menuItems={filteredMenuItems}
        openDevSettingsModal={openDevSettingsModal}
      />
    </>
  );
};
