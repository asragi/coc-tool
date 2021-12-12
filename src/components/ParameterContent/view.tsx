import { Divider, Stack } from '@mui/material';
import { ChangeEvent } from 'react';
import { ExtraParameterKey, ParameterKey, ParameterType } from '../../types';
import { ParameterMatrix } from '../ParameterMatrix';
import { ParamSet } from '../ParameterMatrix/presenter';
import { RollAllButton } from '../RollAllButton';

export interface ParameterContentViewProps {
  parameter: { [key in ParameterKey]: { [key in ParameterType]: number } };
  extraParameter: {
    [key in ExtraParameterKey]: { [key in ParameterType]: number };
  };
  onRoll: (label: ParameterKey) => void;
  onRollAll: () => void;
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
  onRoll,
  onRollAll,
  onChangeParameter,
  onChangeExtraParameter,
}: ParameterContentViewProps) => {
  return (
    <Stack sx={{ mb: 4 }}>
      <RollAllButton onRoll={onRollAll} />
      <ParameterMatrix
        onRoll={onRoll}
        params={parameter as ParamSet}
        onChangeParameter={onChangeParameter}
      />
      <Divider sx={{ mt: 2 }}>{'自動決定パラメータ'}</Divider>
      <ParameterMatrix
        params={extraParameter as ParamSet}
        onChangeParameter={onChangeExtraParameter}
      />
    </Stack>
  );
};
