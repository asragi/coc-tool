import { useCallback, useState } from 'react';
import { APP_NAME, PAGE_PATHS, PAGE_TITLES } from '../../constants';
import { PageKeys } from '../../types';
import { Presenter } from '../../utils/connect';
import { HeaderViewProps } from './view';

export const HeaderPresenter: Presenter<{}, HeaderViewProps> = ({}) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    []
  );
  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const pages = PageKeys.map((page) => {
    return {
      text: PAGE_TITLES[page],
      href: PAGE_PATHS[page]
    };
  });

  return {
    logoString: APP_NAME,
    pages,
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  };
};
