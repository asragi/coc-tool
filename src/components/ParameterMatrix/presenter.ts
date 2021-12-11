import { ChangeEvent, useCallback, useState } from 'react';
import { getUserParameter } from '../../infrastructures/dummy/parameterRepository';
import { ExtraParameterKey, ParameterKey, ParameterType } from '../../types';
import { Presenter } from '../../utils/connect';
import { ParameterMatrixViewProps } from './view';

export type ParamSet = {
  [key in ParameterKey | ExtraParameterKey]: {
    [key in ParameterType]: number;
  };
};

interface Props {
  params: ParamSet;
  onRoll?: () => void;
  onRollAll?: () => void;
  onChangeParameter: (
    key: string,
    type: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({ params, onRoll, onRollAll, onChangeParameter }: Props) => {
  return {
    parameters: params,
    onRoll,
    onRollAll,
    onChangeParameter,
  };
};
