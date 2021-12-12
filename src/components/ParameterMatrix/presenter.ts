import { ChangeEvent } from 'react';
import { ExtraParameterKey, ParameterKey, ParameterType, ParameterTypes } from '../../types';
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
  onRoll?: (label: ParameterKey) => void;
  onChangeParameter: (
    key: SomeParameter,
    type: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({ params, onRoll, onChangeParameter }: Props) => {
  const paramSum: { [key: string]: number } = {};
  (Object.keys(params) as SomeParameter[]).forEach(key => {
    paramSum[key] = 0;
    ParameterTypes.forEach(t => {
      paramSum[key] += params[key][t];
    });
  });
  
return {
    parameters: params,
    paramSum: paramSum as { [key in SomeParameter]: number},
    onRoll,
    onChangeParameter,
  };
};
