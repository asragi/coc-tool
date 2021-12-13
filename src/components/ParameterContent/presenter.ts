import { ChangeEvent, useCallback, useState } from 'react';
import {
  getUserExtraParameter,
  getUserParameter,
} from '../../infrastructures/dummy/parameterRepository';
import {
  ExtraParameterKey,
  ParameterKey,
  ParameterType,
  ParameterTypes,
  SomeParameter,
  Version,
} from '../../types';
import { Presenter } from '../../utils/connect';
import { decideExtraParameter } from '../../utils/decideExtraParameter';
import { diceRoll } from '../../utils/diceRoll';
import { ParameterContentViewProps } from './view';

interface Props {
  version: Version;
}

type CalcSumArg = {
  [key in SomeParameter]: { [key in ParameterType]: number };
};

const CalcSum = (parameter: CalcSumArg) => {
  const paramSum: { [key: string]: number } = {};
  (Object.keys(parameter) as SomeParameter[]).forEach((key) => {
    paramSum[key] = 0;
    ParameterTypes.forEach((t) => {
      paramSum[key] += parameter[key][t];
    });
  });

  return paramSum as { [key in SomeParameter]: number };
};

export const ParameterContentPresenter: Presenter<
  Props,
  ParameterContentViewProps
> = ({ version }: Props) => {
  const initialParameter = getUserParameter(version);
  const initialExtraParameter = getUserExtraParameter(version);
  const [parameter, setParameter] = useState(initialParameter);
  const [parameterSum, setParameterSum] = useState(
    CalcSum(parameter as CalcSumArg)
  );
  const [extraParameter, setExtraParameter] = useState(initialExtraParameter);
  const [extraParameterSum, setExtraParameterSum] = useState(
    CalcSum(extraParameter as CalcSumArg)
  );

  const onRefreshParameter = useCallback(() => {
    const updateExtraParam = (_afterParamSum: {
      [key in ParameterKey]: number;
    }) => {
      const afterParameter = { ...extraParameter };
      (Object.keys(extraParameter) as ExtraParameterKey[]).forEach((key) => {
        afterParameter[key]['self'] = decideExtraParameter(
          key,
          version,
          _afterParamSum
        );
      });
    };
    const afterParamSum = CalcSum(parameter as CalcSumArg);
    setParameterSum(afterParamSum);
    updateExtraParam(afterParamSum);
    setExtraParameterSum(CalcSum(extraParameter as CalcSumArg));
  }, [parameter, extraParameter, version]);

  const onRoll = useCallback(
    (label: ParameterKey) => {
      const afterValue = diceRoll(version, label);
      const newParameter = { ...parameter };
      newParameter[label]['self'] = afterValue;
      setParameter(newParameter);
      onRefreshParameter();
    },
    [parameter, version, onRefreshParameter]
  );

  const onRollAll = useCallback(() => {
    const newParameter = { ...parameter };
    Object.keys(parameter).forEach((key) => {
      const label = key as ParameterKey;
      newParameter[label]['self'] = diceRoll(version, label);
    });
    setParameter(newParameter);
    onRefreshParameter();
  }, [parameter, version, onRefreshParameter]);

  const onChangeParameter = useCallback(
    (
      key: string,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const newParameter = { ...parameter };
      const afterValue = Number(e.target.value);
      if (Number.isNaN(afterValue)) {
        return;
      }
      newParameter[key as ParameterKey][type] = afterValue;
      setParameter(newParameter);
      onRefreshParameter();
    },
    [parameter, onRefreshParameter]
  );

  const onChangeExtraParameter = useCallback(
    (
      key: string,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const newParameter = { ...extraParameter };
      const afterValue = Number(e.target.value);
      if (Number.isNaN(afterValue)) {
        return;
      }
      newParameter[key as ExtraParameterKey][type] = afterValue;
      setExtraParameter(newParameter);
      onRefreshParameter();
    },
    [extraParameter, onRefreshParameter]
  );

  return {
    parameter,
    parameterSum,
    extraParameter,
    extraParameterSum,
    onRoll,
    onRollAll,
    onChangeParameter,
    onChangeExtraParameter,
  };
};
