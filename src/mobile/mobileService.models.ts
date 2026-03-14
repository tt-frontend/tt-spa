import { MOBILE_WIDTH } from 'constants/mobile';
import { createEvent, createStore, sample } from 'effector';

const setIsMobile = createEvent<boolean>();
const handleResize = createEvent<number>();

const checkIsMobile = (width: number) => {
  return width <= MOBILE_WIDTH;
};

const $isMobile = createStore(checkIsMobile(window.innerWidth)).on(
  setIsMobile,
  (_, payload) => payload,
);

sample({
  clock: handleResize,
  fn: checkIsMobile,
  target: setIsMobile,
});

export const mobileService = {
  inputs: { setIsMobile, handleResize },
  outputs: { $isMobile },
};
