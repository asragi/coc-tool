import { PageKey, ParameterKey6, ParameterKey7 } from './types';

export const APP_NAME = 'R CoC Tool';
export const PAGE_TITLES: { [key in PageKey]: string } = {
  about: 'About',
  create7: 'Create(Ver.7)',
  create6: 'Create(Ver.6)',
};

export const PAGE_PATHS: { [key in PageKey]: string } = {
  about: '/about',
  create7: '/7/characters/new',
  create6: '/6/characters/new',
};

export const DICE_PATTERN6: {
  [key in ParameterKey6]: { d: number; pls: number };
} = {
  STR: { d: 3, pls: 0 },
  CON: { d: 3, pls: 0 },
  POW: { d: 3, pls: 0 },
  DEX: { d: 3, pls: 0 },
  APP: { d: 3, pls: 0 },
  SIZ: { d: 2, pls: 6 },
  INT: { d: 2, pls: 6 },
  EDU: { d: 3, pls: 3 },
  INC: { d: 3, pls: 0 },
};

export const DICE_PATTERN7: {
  [key in ParameterKey7]: { d: number; pls: number };
} = {
  STR: { d: 3, pls: 0 },
  CON: { d: 3, pls: 0 },
  POW: { d: 3, pls: 0 },
  DEX: { d: 3, pls: 0 },
  APP: { d: 3, pls: 0 },
  SIZ: { d: 2, pls: 6 },
  INT: { d: 2, pls: 6 },
  EDU: { d: 2, pls: 6 },
  LUK: { d: 3, pls: 0 },
};