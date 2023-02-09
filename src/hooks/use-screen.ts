import { useEffect, useState } from 'react';

type UseScreenVariants =
  | 'width'
  | 'isXs'
  | 'isSm'
  | 'isSmUp'
  | 'isMd'
  | 'isMdUp'
  | 'isLg'
  | 'isLgUp'
  | 'isXl'
  | 'isXlUp'
  | 'isXxl'
  | 'isXxlUp'
  | 'isDesktop';

export type UseScreenReturn = Record<UseScreenVariants, boolean | number>;

export const breakpoint = {
  xs: 360,
  sm: 576,
  md: 768,
  lg: 1240,
  xl: 1420,
  xxl: 1920,
} as const;

export const isBrowser = () => typeof window !== 'undefined';

export const getWindowWidth = () => isBrowser() && window.innerWidth;

export const useScreen = (): UseScreenReturn => {
  const [width, setWidth] = useState<number | false>(false);
  const [isXs, setIsXs] = useState(false);
  const [isSm, setIsSm] = useState(false);
  const [isSmUp, setIsSmUp] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isMdUp, setIsMdUp] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isLgUp, setIsLgUp] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [isXlUp, setIsXlUp] = useState(false);
  const [isXxl, setIsXxl] = useState(false);
  const [isXxlUp, setIsXxlUp] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    const currentWidth = getWindowWidth();
    setWidth(currentWidth);
    setIsXs(currentWidth <= breakpoint.xs);
    setIsSm(currentWidth >= breakpoint.xs && currentWidth < breakpoint.sm);
    setIsSmUp(currentWidth >= breakpoint.sm);
    setIsMd(currentWidth >= breakpoint.sm && currentWidth < breakpoint.md);
    setIsMdUp(currentWidth >= breakpoint.md);
    setIsLg(currentWidth >= breakpoint.md && currentWidth < breakpoint.lg);
    setIsLgUp(currentWidth >= breakpoint.lg);
    setIsXl(currentWidth >= breakpoint.lg && currentWidth < breakpoint.xl);
    setIsXlUp(currentWidth >= breakpoint.xl);
    setIsXxl(currentWidth >= breakpoint.xl && currentWidth < breakpoint.xxl);
    setIsXxlUp(currentWidth >= breakpoint.xxl);
    setIsDesktop(currentWidth >= breakpoint.lg);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-unused-expressions
    window && window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isXs,
    isSm,
    isSmUp,
    isMd,
    isMdUp,
    isLg,
    isLgUp,
    isXl,
    isXlUp,
    isXxl,
    isXxlUp,
    isDesktop,
  };
};
