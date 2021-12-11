export const PageKeys = ['about', 'create7', 'create6'] as const;
export type PageKey = typeof PageKeys[number];

export const Versions = [6, 7] as const;
export type Version = typeof Versions[number];

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
export type ParameterKey = ParameterKey6 | ParameterKey7;
export const isParameterKey6 = (s: string): s is ParameterKey6 => {
  return ParameterKeys6.includes(s as ParameterKey6);
};
export const isParameterKey7 = (s: string): s is ParameterKey7 => {
  return ParameterKeys7.includes(s as ParameterKey7);
};

export const ExtraParameters6 = [
  'HP',
  'MP',
  'SAN',
  'IDA',
  'LUK',
  'KNOW',
] as const;
export type ExtraParameter6 = typeof ExtraParameters6[number];
export const ExtraParameters7 = [
  'HP',
  'MP',
  'SAN',
  'IDA',
  'MOV',
  'KNOW',
  'BLD',
] as const;
export type ExtraParameter7 = typeof ExtraParameters7[number];
export type ExtraParameterKey = ExtraParameter6 | ExtraParameter7;

export const ParameterTypes = ['self', 'mod', 'tmp'] as const;
export type ParameterType = typeof ParameterTypes[number];
