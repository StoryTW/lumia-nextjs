import { useEffect, useState } from 'react';

const SIZES = {
  tabletL: '(max-width: 912px)',
  mobileL: '(max-width: 475px)',
  tabletSM: '(max-width: 602px)'
};

export const useMediaQuery = (mediaQuery: keyof typeof SIZES): boolean => {
  const [isMediaMatch, setIsMediaMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(SIZES[mediaQuery]);
    const mqlHandler = () => setIsMediaMatch(mediaQueryList.matches);
    mqlHandler();

    mediaQueryList.addEventListener('change', mqlHandler);
    return () => mediaQueryList.removeEventListener('change', mqlHandler);
  }, [mediaQuery]);

  return isMediaMatch;
};
