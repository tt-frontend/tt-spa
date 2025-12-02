import { FC } from 'react';
import { Wrapper } from './StickyPanel.styled';
import { Props } from './StickyPanel.types';
import { layoutService } from 'App/layout/layoutService.models';
import { useUnit } from 'effector-react';
import { omit } from 'lodash';

const { outputs } = layoutService;

export const StickyPanel: FC<Props> = ({ children, css, ...divProps }) => {
  const { isPanelOpen } = useUnit({ isPanelOpen: outputs.$isSidePanelOpen });

  return (
    <Wrapper
      isPanelOpen={isPanelOpen}
      css={css ? { css } : css}
      {...omit(divProps, 'css')}
    >
      {children}
    </Wrapper>
  );
};
