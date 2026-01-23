export let savedScrollY = 0;

export const saveScroll = () => {
  savedScrollY = window.scrollY;
  console.log(scrollY);
};

export const restoreScroll = () => {
  window.scrollTo(0, savedScrollY);
};
