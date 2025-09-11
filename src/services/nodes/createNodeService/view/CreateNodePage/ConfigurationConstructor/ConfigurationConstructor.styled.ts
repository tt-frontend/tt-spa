import styled from 'styled-components';
import dotBg from './Assets/dotBg.svg';

export const Wrapper = styled.div`
  background-image: url(${dotBg});
  width: 112%;
  height: 100%;
  margin-left: -100px;

  overflow: hidden;
`;

export const RightBlock = styled.div`
  display: flex;
  gap: 16px;
`;

export const Footer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0px;
  left: 208px;

  align-items: center;
  justify-content: space-between;
  padding: 16px 56px;
  width: calc(100% - 208px);
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);
  gap: 16px;
`;

export const RightPanel = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 90px;
  bottom: 140px;
  right: 60px;

  gap: 16px;
  padding: 20px 16px;
  width: 300px;
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);
`;

export const TitleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgba(39, 47, 90, 1);
`;

export const SchemaWrapper = styled.div`
  transform: scale(1.3) translateX(260px) translateY(180px);
`;

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;

  height: 48px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);

  padding: 16px;

  cursor: pointer;

  transition: 0.2s;
  &:hover {
    background-color: rgba(78, 93, 146, 0.04);
  }
`;

export const AddButton = styled.div`
  color: rgba(24, 158, 233, 1);
  font-size: 16px;
  font-weight: 500;
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
