import { PageKey } from './types';

export const APP_NAME = 'R CoC Tool';
export const PAGE_TITLES: { [key in PageKey]: string } = {
  about: 'About',
  create7: 'Create(Ver.7)',
  create6: 'Create(Ver.6)',
};

export const PAGE_PATHS: { [key in PageKey]: string } = {
  about: '/about',
  create7: '/7/characters/new',
  create6: '/6/characters/new'
};
