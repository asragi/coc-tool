import { useCallback, useState } from 'react';
import { APP_NAME, PAGE_TITLES } from '../../constants';
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

  return {
    logoString: APP_NAME,
    pages: Object.values(PAGE_TITLES),
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  };
};
