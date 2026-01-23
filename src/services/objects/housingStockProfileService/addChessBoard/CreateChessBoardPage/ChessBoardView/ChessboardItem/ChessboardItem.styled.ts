import styled, { css } from 'styled-components';
import { ChessBoardItemType } from './ChessboardItem.types';

const shadowStyle = css`
  background: #ffffff;
  border: 1px solid #f3f5f6;

  box-shadow: 0px 8px 16px 0px #4e5d9214;
  box-shadow: 0px 4px 4px 0px #4e5d9229;

  color: #272f5a;
`;

const flatStyle = css`
  background: #ffffff;
  border: 1px solid #f3f5f6;

  color: #189ee9;
`;

const outlineStyle = css`
  border: 1px solid #dcdee4;

  color: #272f5a;
`;

const emptyStyle = css`
  color: #272f5a;
`;

const hoverStyle = css`
  background: #272f5a;
  color: white;
  border: none;
`;

const typeToStyle = {
  shadow: shadowStyle,
  flat: flatStyle,
  outline: outlineStyle,
  empty: emptyStyle,
};

const wideStyle = css`
  width: 100%;
`;

export const Wrapper = styled.div<{
  type: ChessBoardItemType;
  wide?: boolean;
  active?: boolean;
}>`
  box-sizing: border-box;

  min-width: 33px;
  /* width: ${({ wide }) => (wide ? '100%' : '33px')}; */
  /* max-width: ${({ wide }) => (wide ? '100%' : '33px')}; */
  ${({ wide }) => (wide ? wideStyle : '')}

  height: 33px;

  padding: 0 8px;

  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: PT Root UI;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;

  ${({ type }) => typeToStyle[type]}

  &:hover {
    ${hoverStyle}
  }

  ${({ active }) => (active ? hoverStyle : '')}
`;
