import { DICE_PATTERN6, DICE_PATTERN7 } from '../constants';
import { isParameterKey6, isParameterKey7, ParameterKey, Version } from '../types';
import { getRandomIntInclusive } from './getRandomIntInclusive';

export const diceRoll = (version: Version, label: ParameterKey): number => {
  if (version === 6) {
    if (!isParameterKey6(label)) {
      throw new Error();
    }
    const { d: dice, pls: plus } = DICE_PATTERN6[label];
    let result = 0;
    for (let i = 0; i < dice; ++i) {
      result += getRandomIntInclusive(1, 6);
    }
    result += plus;

    return result;
  }
  if (!isParameterKey7(label)) {
    throw new Error();
  }
  const { d: dice, pls: plus } = DICE_PATTERN7[label];
  let result = 0;
  for (let i = 0; i < dice; ++i) {
    result += getRandomIntInclusive(1, 6);
  }
  result += plus;

  return result;
};
