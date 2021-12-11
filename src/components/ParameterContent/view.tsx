import { ChangeEvent } from 'react';
import { ExtraParameterKey, ParameterKey, ParameterType } from '../../types';
import { ParameterMatrix } from '../ParameterMatrix';
import { ParamSet } from '../ParameterMatrix/presenter';

export interface ParameterContentViewProps {
  parameter: { [key in ParameterKey]: { [key in ParameterType]: number } };
  extraParameter: {
    [key in ExtraParameterKey]: { [key in ParameterType]: number };
  };
  onChangeParameter: (
    key: string,
    type: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onChangeExtraParameter: (
    key: string,
    type: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterContentView = ({
  parameter,
  extraParameter,
  onChangeParameter,
  onChangeExtraParameter,
}: ParameterContentViewProps) => {
  return (
    <>
      <ParameterMatrix
        onRoll={() => {}}
        params={parameter as ParamSet}
        onChangeParameter={onChangeParameter}
      />
      <ParameterMatrix
        params={extraParameter as ParamSet}
        onChangeParameter={onChangeExtraParameter}
      />
    </>
  );
};
