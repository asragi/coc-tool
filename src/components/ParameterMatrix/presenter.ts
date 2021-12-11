import { ChangeEvent } from 'react';
import { ExtraParameterKey, ParameterKey, ParameterType } from '../../types';

export type ParamSet = {
  [key in ParameterKey | ExtraParameterKey]: {
    [key in ParameterType]: number;
  };
};

type SomeParameter = ParameterKey | ExtraParameterKey;

interface Props {
  params: ParamSet;
  onRoll?: () => void;
  onRollAll?: () => void;
  onChangeParameter: (
    key: SomeParameter,
    type: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterMatrixPresenter = ({
  params,
  onRoll,
  onRollAll,
  onChangeParameter,
}: Props) => {
  return {
    parameters: params,
    onRoll,
    onRollAll,
    onChangeParameter,
  };
};
