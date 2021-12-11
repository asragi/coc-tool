import { ChangeEvent, useCallback, useState } from 'react';
import {
  getUserExtraParameter,
  getUserParameter,
} from '../../infrastructures/dummy/parameterRepository';
import { ExtraParameterKey, ParameterKey, ParameterType, Version } from '../../types';
import { Presenter } from '../../utils/connect';
import { diceRoll } from '../../utils/diceRoll';
import { ParameterContentViewProps } from './view';

interface Props {
  version: Version;
}

export const ParameterContentPresenter: Presenter<
  Props,
  ParameterContentViewProps
> = ({ version }: Props) => {
  const initialParameter = getUserParameter(version);
  const initialExtraParameter = getUserExtraParameter(version);
  const [parameter, setParameter] = useState(initialParameter);
  const [extraParameter, setExtraParameter] = useState(initialExtraParameter);

  const onRoll = useCallback((label: ParameterKey) => {
    const afterValue = diceRoll(version, label);
    const newParameter = {...parameter};
    newParameter[label]['self'] = afterValue;
    setParameter(newParameter);
  } , [parameter, version]);

  const onRollAll = useCallback(() => {
    const newParameter = {...parameter};
    Object.keys(parameter).forEach((key) => {
      const label = key as ParameterKey;
      newParameter[label]['self'] = diceRoll(version, label);
    });
    setParameter(newParameter);
  }, [parameter, version]);

  const onChangeParameter = useCallback(
    (
      key: string,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const newParameter = {...parameter};
      const afterValue = Number(e.target.value);
      if (Number.isNaN(afterValue)) {
        return;
      }
      newParameter[key as ParameterKey][type] = afterValue;
      setParameter(newParameter);
    },
    [parameter]
  );

  const onChangeExtraParameter = useCallback(
    (
      key: string,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const newParameter = {...extraParameter};
      const afterValue = Number(e.target.value);
      if (Number.isNaN(afterValue)) {
        return;
      }
      newParameter[key as ExtraParameterKey][type] = afterValue;
      setExtraParameter(newParameter);
    },
    [extraParameter]
  );

  return {
    parameter,
    extraParameter,
    onRoll,
    onRollAll,
    onChangeParameter,
    onChangeExtraParameter,
  };
};
