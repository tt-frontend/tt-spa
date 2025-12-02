import { FC } from 'react';
import { TextWrapper, Wrapper } from './ActsCountPanel.styled';
import { ActsCountPanelProps } from './ActsCountPanel.types';
import { getActsCountText } from './ActsCountPanel.utils';
import { StickyPanel } from 'ui-kit/shared/StickyPanel';

export const ActsCountPanel: FC<ActsCountPanelProps> = ({ count }) => {
  const actsCountText = getActsCountText(count);

  return (
    <Wrapper>
      <StickyPanel>
        <TextWrapper>Итого</TextWrapper>
        <TextWrapper>
          {count} {actsCountText}
        </TextWrapper>
      </StickyPanel>
    </Wrapper>
  );
};
