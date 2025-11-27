import { FC } from 'react';
import { Wrapper } from './ChessboardItem.styled';
import { Props } from './ChessboardItem.types';

export const ChessboardItem: FC<Props> = ({
  children,
  type = 'shadow',
  wide,
}) => {
  return (
    <Wrapper type={type} wide={wide}>
      {children}
    </Wrapper>
  );
};
