import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Panel } from '../Layout/Panel';
import {
  ContentWrapper,
  DrawerSC,
  Header,
  HeaderLogo,
  HeaderLogoText,
  HeaderTitle,
  HeaderTitleWrapper,
  MenuButton,
  PageWrapper,
} from './MobileLayout.styled';
import logoEmblemMini from '../Layout/Panel/Logo/assets/logoEmblemMini.svg';
import { MenuOutlined } from '@ant-design/icons';
import { MenuType } from 'services/menuService/menuService.types';

export const MobileLayout: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePanelOpen = (isOpen: boolean) => {
    if (!isOpen) {
      setIsDrawerOpen(false);
    }
  };

  return (
    <PageWrapper>
      <DrawerSC
        open={isDrawerOpen}
        title={<></>}
        width={208}
        closable={false}
        maskClosable={true}
        onClose={() => setIsDrawerOpen(false)}
        style={{ padding: 0 }}
        headerStyle={{ display: 'none' }}
        placement="right"
      >
        <Panel
          isChevronOpen
          isOpen
          setIsOpen={handlePanelOpen}
          allowedMenuTypes={[MenuType.Tasks]}
        />
      </DrawerSC>

      <Header>
        <HeaderTitleWrapper>
          <HeaderLogo src={logoEmblemMini} alt="logotip" />
          <HeaderTitle>
            <HeaderLogoText>TT</HeaderLogoText>
            Management
          </HeaderTitle>
        </HeaderTitleWrapper>
        <MenuButton
          type="ghost"
          size="s"
          icon={<MenuOutlined />}
          onClick={() => setIsDrawerOpen(true)}
        />
      </Header>

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
};
