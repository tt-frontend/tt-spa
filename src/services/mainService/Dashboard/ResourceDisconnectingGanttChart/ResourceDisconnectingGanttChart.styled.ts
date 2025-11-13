import { Skeleton } from 'antd';
import { EResourceType } from 'api/types';
import styled, { css, keyframes } from 'styled-components';
import { resourceColorLookup } from 'utils/resourceNamesLookup';

export const Wrapper = styled.div``;

export const Header = styled.div`
  background: #f3f5f6;
  padding: 8px 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: stretch; /* ← гарантирует одинаковую высоту для детей */
  min-height: 120px; /* или auto, если хочешь подстраивать под контент */
`;

export const ResourcePanel = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* красиво распределяет элементы */
  gap: 10px;
  width: 82px;
`;

export const ResourcePanelItem = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  padding-left: 9px;
`;

export const GanttPanelWrapper = styled.div`
  border-bottom: 1px solid #f3f5f6;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const DatesWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch; /* ← важно! чтобы DateItem растягивался */
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const DateItem = styled.div`
  padding-top: 4px;
  height: 100%;
  width: 100%;
  border-left: 1px solid #f3f5f6;
  display: flex;
  justify-content: center;
  font-size: 10px;
  color: #272f5a;
`;

export const GanttPanel = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* красиво распределяет элементы */
  gap: 10px;
  width: 100%;
`;

export const GanttPanelItem = styled.div`
  height: 24px;
  overflow: hidden;
  position: relative;
`;

const growWidth = keyframes`
  from {
    width: 0;
    opacity: 0.6;
  }
  to {
    width: var(--target-width);
    opacity: 1;
  }
`;

// --- Общий css-фрагмент для анимации ---
const appearAnimation = css`
  animation: ${growWidth} 0.5s ease-out forwards;
`;

export const ResourceDisconnectionItem = styled.div<{
  resource: EResourceType;
  width: number;
  left: number;
  isLeftOverflow: boolean;
  isRightOverflow: boolean;
}>`
  position: absolute;
  background: ${({ resource }) => resourceColorLookup[resource]}77;
  height: 24px;
  border-radius: ${getPanelBorderRadius};
  width: ${({ width }) => width}%;
  left: ${({ left }) => left}%;
  border: 2px solid white;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;

  --target-width: ${({ width }) => width}%;

  ${appearAnimation};

  &:hover {
    background: ${({ resource }) => resourceColorLookup[resource]};
  }
`;

export const ResourceDisconnectionLoaderItem = styled(Skeleton.Button)<{
  width: number;
  left: number;
  isLeftOverflow: boolean;
  isRightOverflow: boolean;
}>`
  position: absolute;
  height: 24px !important;
  border-radius: ${getPanelBorderRadius} !important;
  min-width: ${({ width }) => width}% !important;
  width: ${({ width }) => width}% !important;

  * {
    border-radius: ${getPanelBorderRadius} !important;
    /* min-width: ${({ width }) => width}% !important; */
    /* width: ${({ width }) => width}% !important; */
  }
  left: ${({ left }) => left}%;
`;

function getPanelBorderRadius({
  isLeftOverflow,
  isRightOverflow,
}: {
  isLeftOverflow: boolean;
  isRightOverflow: boolean;
}) {
  if (isLeftOverflow && isRightOverflow) {
    return 0;
  }

  if (isLeftOverflow) {
    return '0 6px 6px 0';
  }

  if (isRightOverflow) {
    return '6px 0 0 6px';
  }

  return '6px';
}
