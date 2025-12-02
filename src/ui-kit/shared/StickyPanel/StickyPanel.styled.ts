import {
  SIDE_PANEL_CLOSE_WIDTH,
  SIDE_PANEL_OPEN_WIDTH,
} from 'App/layout/Layout/Layout.constants';
import styled, { RuleSet } from 'styled-components';

export const getPanelSize = ({ isPanelOpen }: { isPanelOpen: boolean }) =>
  isPanelOpen ? `${SIDE_PANEL_OPEN_WIDTH}px` : `${SIDE_PANEL_CLOSE_WIDTH}px`;

export const Wrapper = styled.div<{
  isPanelOpen: boolean;
  css?: { css: RuleSet<object> };
}>`
  position: fixed;

  left: ${getPanelSize};
  bottom: 0;

  width: calc(100% - ${getPanelSize});
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 56px;

  ${({ css }) => css?.css ?? ''}
`;
