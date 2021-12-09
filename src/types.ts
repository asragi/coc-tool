export const PageKeys = ['about', 'create7', 'create6'] as const;
export type PageKey = typeof PageKeys[number];

export const ParameterKeys7 = [
  'STR',
  'CON',
  'POW',
  'DEX',
  'APP',
  'SIZ',
  'INT',
  'EDU',
  'LUK',
] as const;
export type ParameterKey7 = typeof ParameterKeys7[number];
export const ParameterKeys6 = [
  'STR',
  'CON',
  'POW',
  'DEX',
  'APP',
  'SIZ',
  'INT',
  'EDU',
  'INC',
] as const;
export type ParameterKey6 = typeof ParameterKeys6[number];
export const ParameterTypes = ['self', 'mod', 'tmp'] as const;
export type ParameterType = typeof ParameterTypes[number];
