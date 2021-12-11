import {
  ExtraParameterKey,
  ParameterKey,
  ParameterType,
  Version,
} from '../../types';

type parameters = {
  [key in ParameterKey]: { [key in ParameterType]: number };
};

type extraParameter = {
  [key in ExtraParameterKey]: { [key in ParameterType]: number };
};

export const getUserExtraParameter = (version: Version) => {
  if (version === 6) {
    return {
      HP: { self: 12, mod: 0, tmp: 0 },
      MP: { self: 13, mod: 0, tmp: 0 },
      SAN: { self: 14, mod: 0, tmp: 0 },
      IDA: { self: 15, mod: 0, tmp: 0 },
      LUK: { self: 16, mod: 0, tmp: 0 },
      KNOW: { self: 17, mod: 0, tmp: 0 },
    } as extraParameter;
  }

  return {
    HP: { self: 22, mod: 0, tmp: 0 },
    MP: { self: 23, mod: 0, tmp: 0 },
    SAN: { self: 24, mod: 0, tmp: 0 },
    IDA: { self: 25, mod: 0, tmp: 0 },
    KNOW: { self: 27, mod: 0, tmp: 0 },
    MOV: { self: 28, mod: 0, tmp: 1 },
    BLD: { self: 29, mod: 0, tmp: 2 },
  } as extraParameter;
};

export const getUserParameter = (version: Version) => {
  if (version === 6) {
    return {
      STR: { self: 10, mod: 0, tmp: 0 },
      CON: { self: 11, mod: 0, tmp: 0 },
      POW: { self: 12, mod: 0, tmp: 0 },
      DEX: { self: 13, mod: 0, tmp: 0 },
      APP: { self: 14, mod: 0, tmp: 0 },
      SIZ: { self: 15, mod: 0, tmp: 0 },
      INT: { self: 16, mod: 0, tmp: 0 },
      EDU: { self: 17, mod: 0, tmp: 0 },
      INC: { self: 18, mod: 0, tmp: 0 },
    } as parameters;
  }

  return {
    STR: { self: 10, mod: 0, tmp: 0 },
    CON: { self: 11, mod: 0, tmp: 0 },
    POW: { self: 12, mod: 0, tmp: 0 },
    DEX: { self: 13, mod: 0, tmp: 0 },
    APP: { self: 14, mod: 0, tmp: 0 },
    SIZ: { self: 15, mod: 0, tmp: 0 },
    INT: { self: 16, mod: 0, tmp: 0 },
    EDU: { self: 17, mod: 0, tmp: 0 },
    LUK: { self: 18, mod: 0, tmp: 0 },
  } as parameters;
};
