import { useCallback, useState } from 'react';
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
    logoString: 'R CoC Tool',
    pages: ['About', 'Create(Ver.7)', 'Create(Ver.6)'],
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  };
};
