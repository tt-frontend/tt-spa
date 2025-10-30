import React, { FC } from 'react';
import { Wrapper } from './LinkButton.styled';
import { LinkButtonProps } from './LinkButton.types';
import { ChevronRightIcon } from 'ui-kit/icons';

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  onClick,
  fontSize,
  chevron,
}) => {
  return (
    <Wrapper onClick={onClick} style={{ fontSize }}>
      {children}
      {chevron && <ChevronRightIcon />}
    </Wrapper>
  );
};
