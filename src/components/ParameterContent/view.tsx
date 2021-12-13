import { Divider, Stack, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import {
  ExtraParameterKey,
  ParameterKey,
  ParameterType,
  SomeParameter,
} from '../../types';
import { ParameterMatrix } from '../ParameterMatrix';
import { ParamSet } from '../ParameterMatrix/presenter';
import { RollAllButton } from '../RollAllButton';

export interface ParameterContentViewProps {
  parameter: { [key in ParameterKey]: { [key in ParameterType]: number } };
  parameterSum: { [key in SomeParameter]: number };
  extraParameter: {
    [key in ExtraParameterKey]: { [key in ParameterType]: number };
  };
  extraParameterSum: { [key in SomeParameter]: number };
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
  parameterSum,
  extraParameter,
  extraParameterSum,
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
        paramSum={parameterSum as { [key in SomeParameter]: number }}
        onChangeParameter={onChangeParameter}
        enableSelfParameter
      />
      <Divider sx={{ mt: 2 }}>
        <Typography>{'自動決定パラメータ'}</Typography>
      </Divider>
      <ParameterMatrix
        params={extraParameter as ParamSet}
        paramSum={extraParameterSum as { [key in SomeParameter]: number }}
        onChangeParameter={onChangeExtraParameter}
      />
    </Stack>
  );
};
