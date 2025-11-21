import { Button, Menu } from 'antd';
import styled from 'styled-components';
import { ContextMenuButtonColorsLookup } from './ContextMenuButton.types';
import { ChevronDown } from 'react-bootstrap-icons';

export const StyledMenuButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray !important;
  width: ${({ size }) => (size === 'small' ? '32px' : '48px')};
  height: ${({ size }) => (size === 'small' ? '32px' : '48px')} !important;
  border-radius: 4px;
`;

export const MenuItem = styled(Menu.Item)<{ color?: string }>`
  min-width: 408px;
  color: ${({ color = ContextMenuButtonColorsLookup.primary }) =>
    color} !important;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */

  .ant-dropdown-menu-title-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    color: white !important;

    path {
      fill: white !important;
      fill-opacity: 1 !important;
    }

    circle {
      stroke: white !important;
      stroke-opacity: 1 !important;
    }

    .context-menu-icon {
      fill: white !important;
    }
  }
`;

export const MenuItemTitle = styled.div<{ strong?: boolean; level: number }>`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: ${({ strong }) => (strong ? 500 : 400)};
  padding-left: ${({ level }) => 30 * level}px;
`;

export const ChevronSC = styled(ChevronDown)<{ isOpen: boolean }>`
  transition: 0.2s;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
`;
