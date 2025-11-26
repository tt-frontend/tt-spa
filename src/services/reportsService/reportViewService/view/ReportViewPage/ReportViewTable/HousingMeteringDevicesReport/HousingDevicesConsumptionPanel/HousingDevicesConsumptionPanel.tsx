import React, { FC } from 'react';
import { round } from 'utils/round';
import { TextWrapper, Wrapper } from './HousingDevicesConsumptionPanel.styled';
import { HousingDevicesConsumptionPanelProps } from './HousingDevicesConsumptionPanel.types';
import { StickyPanel } from 'ui-kit/shared/StickyPanel';

export const HousingDevicesConsumptionPanel: FC<
  HousingDevicesConsumptionPanelProps
> = ({ count }) => {
  return (
    <Wrapper>
      <StickyPanel>
        <TextWrapper>Расход по всем общедомовым приборам</TextWrapper>
        <TextWrapper isBold>{round(count, 3)} кВт/ч</TextWrapper>
      </StickyPanel>
    </Wrapper>
  );
};
