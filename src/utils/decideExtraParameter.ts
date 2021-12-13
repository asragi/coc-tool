import {
  ExtraParameterKey,
  ParameterKey,
  Version,
} from '../types';

export const decideExtraParameter = (
  label: ExtraParameterKey,
  version: Version,
  paramSum: { [key in ParameterKey]: number }
): number => {
  if (version === 6) {
    if (label === 'HP') {
      return Math.ceil((paramSum['STR'] + paramSum['SIZ']) / 2);
    }
    if (label === 'MP') {
      return paramSum['POW'];
    }
    if (label === 'SAN') {
      return 5 * paramSum['POW'];
    }
    if (label === 'IDA') {
      return 5 * paramSum['INT'];
    }
    if (label === 'KNOW') {
      return 5 * paramSum['EDU'];
    }
    if (label === 'LUK') {
      return 5 * paramSum['POW'];
    }
  }
  // for Ver.7
  if (label === 'HP') {
    return Math.floor((paramSum['STR'] + paramSum['SIZ']) / 10);
  }
  if (label === 'MP') {
    return paramSum['POW'] / 5;
  }
  if (label === 'SAN') {
    return  paramSum['POW'];
  }
  if (label === 'IDA') {
    return  paramSum['INT'];
  }
  if (label === 'KNOW') {
    return paramSum['EDU'];
  }
  throw new Error();
};
