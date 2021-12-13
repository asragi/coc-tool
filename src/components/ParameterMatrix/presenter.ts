import { ChangeEvent } from 'react';
import { ExtraParameterKey, ParameterKey, ParameterType } from '../../types';
import { Presenter } from '../../utils/connect';
import { ParameterMatrixViewProps } from './view';

export type ParamSet = {
  [key in SomeParameter]: {
    [key in ParameterType]: number;
  };
};

type SomeParameter = ParameterKey | ExtraParameterKey;

interface Props {
  params: ParamSet;
  paramSum: { [key in SomeParameter]: number };
  onRoll?: (label: ParameterKey) => void;
  onChangeParameter: (
    key: SomeParameter,
    type: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  enableSelfParameter?: boolean;
}

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({
  params,
  paramSum,
  onRoll,
  onChangeParameter,
  enableSelfParameter,
}: Props) => {
  return {
    parameters: params,
    paramSum,
    onRoll,
    onChangeParameter,
    enableSelfParameter,
  };
};
