import { useUnit } from 'effector-react';
import { mobileService } from './mobileService.models';
import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect } from 'react';

export function useMobileCheck() {
  const { handleResize } = useUnit({
    isMobile: mobileService.outputs.$isMobile,
    handleResize: mobileService.inputs.handleResize,
  });

  const size = useWindowSize();

  useEffect(() => {
    if (typeof size.width !== 'number') return;

    handleResize(size.width);
  }, [size]);
}
