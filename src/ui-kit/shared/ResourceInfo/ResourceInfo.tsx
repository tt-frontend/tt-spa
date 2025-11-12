import React, { FC } from 'react';
import { ResourceIconLookup } from 'ui-kit/shared/ResourceIconLookup';
import { Name, Wrap } from './ResourceInfo.styled';
import { ResourceInfoProps } from './ResourceInfo.types';
import { actResourceNamesLookup } from './ResourceInfo.utils';

export const ResourceInfo: FC<ResourceInfoProps> = ({
  resource,
  style,
  bold,
}) => {
  return (
    <Wrap>
      <ResourceIconLookup resource={resource} style={style} />
      <Name bold={bold}>{actResourceNamesLookup[resource]}</Name>
    </Wrap>
  );
};
