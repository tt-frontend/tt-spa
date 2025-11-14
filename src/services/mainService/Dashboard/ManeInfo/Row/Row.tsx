import { FC } from 'react';
import { Props } from './Row.types';
import { Indicators, Numbers, Wrapper } from './Row.styled';
import { Skeleton } from 'antd';

export const Row: FC<Props> = ({ indicator, value, isLoading }) => {
  return (
    <Wrapper>
      <Indicators>{indicator}</Indicators>
      {isLoading ? (
        <Skeleton.Button
          style={{ width: 60, height: 20 }}
          active
          size="small"
        />
      ) : (
        <Numbers>{value}</Numbers>
      )}
    </Wrapper>
  );
};
