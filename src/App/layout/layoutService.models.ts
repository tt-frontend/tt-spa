import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';

const handleOpenSidePanel = createEvent();
const handleCloseSidePanel = createEvent();

const $isSidePanelOpen = createStore(true)
  .on(handleOpenSidePanel, () => true)
  .on(handleCloseSidePanel, () => false);

persist({
  store: $isSidePanelOpen,
  key: 'is-side-panel-open',
});

export const layoutService = {
  inputs: { handleOpenSidePanel, handleCloseSidePanel },
  outputs: { $isSidePanelOpen },
};
