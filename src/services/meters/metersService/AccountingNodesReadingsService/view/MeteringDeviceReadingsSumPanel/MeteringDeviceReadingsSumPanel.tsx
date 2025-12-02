import React, { FC } from 'react';
import { Wrapper, TextWrapper } from './MeteringDeviceReadingsSumPanel.styled';
import { MeteringDeviceReadingsSumPanelProps } from './MeteringDeviceReadingsSumPanel.types';
import { StickyPanel } from 'ui-kit/shared/StickyPanel';

export const MeteringDeviceReadingsSumPanel: FC<
  MeteringDeviceReadingsSumPanelProps
> = ({ sum }) => {
  return (
    <Wrapper>
      <StickyPanel>
        <TextWrapper>Расход по всем узлам учёта</TextWrapper>
        <TextWrapper>{sum || '-'} кВт/ч</TextWrapper>
      </StickyPanel>
    </Wrapper>
  );
};
