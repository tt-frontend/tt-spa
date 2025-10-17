import styled from 'styled-components';
import dotBg from './Assets/dotBg.svg';

export const ConfiguratorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const SchemaWrapper = styled.div`
  background-image: url(${dotBg});
  background-color: rgba(243, 245, 246, 1);
  border-radius: 6px;

  padding: 50px 40px;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
  width: 100%;
`;

export const TitleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgba(39, 47, 90, 1);
`;

export const Panel = styled.div`
  display: flex;

  height: 48px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);

  padding: 16px;

  cursor: pointer;

  color: rgba(24, 158, 233, 1);

  gap: 4px;
  font-size: 16px;
  font-weight: 500;

  transition: 0.2s;
  &:hover {
    background-color: rgba(78, 93, 146, 0.04);
    color: rgba(39, 47, 90, 1);
    path {
      fill: rgba(39, 47, 90, 1);
      stroke: rgba(39, 47, 90, 1);
    }
  }
`;

export const PanelDevice = styled.div`
  display: flex;

  justify-content: space-between;

  height: 48px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);

  padding: 16px;

  color: rgba(24, 158, 233, 1);
`;

export const ModelName = styled.div`
  color: rgba(39, 47, 90, 1);
  font-size: 16px;
  font-weight: 500;
`;

export const SerialNumber = styled.div`
  color: rgba(39, 47, 90, 0.7);
  font-size: 16px;
  font-weight: 500;

  max-width: 140px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;

  color: rgba(39, 47, 90, 0.7);
`;
