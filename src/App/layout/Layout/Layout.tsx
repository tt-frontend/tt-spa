import { FC, useEffect, useState } from 'react';
import {
  DrawerSC,
  PageWrapper,
  PageWrapperRelativeLayout,
  Wrapper,
} from './Layout.styled';
import { Props } from './Layout.types';
import { Panel } from './Panel';
import { Outlet } from 'react-router-dom';

export const Layout: FC<Props> = ({
  handleOpenSidePanel,
  handleCloseSidePanel,
  isSidePanelOpen,
}) => {
  const isOpen = isSidePanelOpen;

  const setIsOpen = (value: boolean) => {
    if (value) {
      handleOpenSidePanel();
    } else {
      handleCloseSidePanel();
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setIsDrawerOpen(false);
  }, [isOpen]);

  return (
    <Wrapper isMenuOpen={isOpen}>
      <DrawerSC
        open={isDrawerOpen}
        title={<></>}
        width={208}
        closable={false}
        maskClosable={true}
        onClose={() => setIsDrawerOpen(false)}
        style={{ padding: 0 }}
        headerStyle={{ display: 'none' }}
        placement="left"
      >
        <Panel
          isChevronOpen={isOpen}
          isOpen
          setIsOpen={setIsOpen}
          onMouseLeave={() => setIsDrawerOpen(false)}
        />
      </DrawerSC>

      <Panel
        isOpen={isOpen}
        isChevronOpen={isOpen}
        setIsOpen={setIsOpen}
        onMouseEnter={() => !isOpen && setIsDrawerOpen(true)}
      />
      <div />
      <PageWrapperRelativeLayout>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </PageWrapperRelativeLayout>
    </Wrapper>
  );
};
