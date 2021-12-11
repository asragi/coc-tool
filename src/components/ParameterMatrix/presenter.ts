import { Presenter } from '../../utils/connect';
import { ParameterMatrixViewProps } from './view';

interface Props {}

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({}: Props) => {
  return {
    parameters: {
      STR: { self: 10, mod: 0, tmp: 0 },
      CON: { self: 11, mod: 0, tmp: 0 },
      POW: { self: 12, mod: 0, tmp: 0 },
      DEX: { self: 13, mod: 0, tmp: 0 },
      APP: { self: 14, mod: 0, tmp: 0 },
      SIZ: { self: 15, mod: 0, tmp: 0 },
      INT: { self: 16, mod: 0, tmp: 0 },
      EDU: { self: 17, mod: 0, tmp: 0 },
      INC: { self: 18, mod: 0, tmp: 0 },
    },
    extraParams: {
      HP: { self: 12, mod: 0, tmp: 0 },
      MP: { self: 13, mod: 0, tmp: 0 },
      SAN: { self: 14, mod: 0, tmp: 0 },
      IDE: { self: 15, mod: 0, tmp: 0 },
      LUK: { self: 16, mod: 0, tmp: 0 },
      KNOW: { self: 17, mod: 0, tmp: 0 },
    },
  };
};
