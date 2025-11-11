import { EResourceType } from 'api/types';
import styled from 'styled-components';
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

export const ResourceDisconnectionItem = styled.div<{
  resource: EResourceType;
  width: number;
  left: number;
  isLeftOverflow: boolean;
  isRightOverflow: boolean;
}>`
  position: absolute;
  background: ${({ resource }) => resourceColorLookup[resource]};
  height: 24px;
  border-radius: ${getPanelBorderRadius};
  width: ${({ width }) => width}%;
  left: ${({ left }) => left}%;
  border: 2px solid white;
  box-sizing: border-box;
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
