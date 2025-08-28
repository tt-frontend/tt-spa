import React from 'react';
import { FC } from 'react';
import { ContextMenuButton } from '../../ContextMenuButton/ContextMenuButton';
import {
  ContentWrapper,
  Description,
  PageHeaderStyled,
  PageTitle,
  TitleWrapper,
} from './PageHeader.styled';
import { PageHeaderProps } from './PageHeader.types';

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  contextMenu,
  isGhost,
  children,
  className,
  description,
}) => {
  return (
    <PageHeaderStyled className={className}>
      <TitleWrapper>
        <PageTitle isGhost={isGhost}>{title}</PageTitle>
        {description && <Description>{description}</Description>}
      </TitleWrapper>
      <ContentWrapper>
        {children && <div>{children}</div>}
        {contextMenu && (
          <ContextMenuButton isVisible {...contextMenu} size="small" />
        )}
      </ContentWrapper>
    </PageHeaderStyled>
  );
};
