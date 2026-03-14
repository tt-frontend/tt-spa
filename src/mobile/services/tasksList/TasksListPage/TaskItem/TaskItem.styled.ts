import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Card = styled.div<{ isEmergency: boolean }>`
  border: 1px solid
    ${({ isEmergency }) => (isEmergency ? '#fc525b' : '#d9dce7')};
  border-radius: 8px;
  padding: 16px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  // box-shadow: 0 2px 8px rgba(29, 36, 82, 0.06);
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Subtitle = styled.div`
  font-size: 15px;
  color: #6e738d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IdText = styled.div`
  color: #1e88e5;
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #2b2f55;
`;

export const Divider = styled.div`
  height: 1px;
  background: #eceef4;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a4f6a;
  font-size: 15px;
`;

export const AddressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a4f6a;
  font-size: 15px;
`;
