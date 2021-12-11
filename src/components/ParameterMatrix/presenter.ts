import { ChangeEvent, useCallback, useState } from 'react';
import { getUserParameter } from '../../infrastructures/dummy/parameterRepository';
import {
  ExtraParameterKey,
  ParameterKey,
  ParameterType,
  Version,
} from '../../types';
import { Presenter } from '../../utils/connect';
import { ParameterMatrixViewProps } from './view';

interface Props {
  version: Version;
}

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({ version }: Props) => {
  const initialParameter = getUserParameter(version);
  const [params, setParams] = useState(initialParameter);

  const onChangeParameter = useCallback(
    (
      key: ParameterKey,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      // Clone Object to Invoke setState
      const afterParams = { ...params };
      const afterNumber = Number(e.target.value);
      if (Number.isNaN(afterNumber)) {
        return;
      }
      afterParams.parameters[key][type] = afterNumber;
      setParams(afterParams);
    },
    [params]
  );

  const onChangeExtraParameter = useCallback(
    (
      key: ExtraParameterKey,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      // Clone Object to Invoke setState
      const afterParams = { ...params };
      const afterNumber = Number(e.target.value);
      if (Number.isNaN(afterNumber)) {
        return;
      }
      afterParams.extraParams[key][type] = afterNumber;
      setParams(afterParams);
    },
    [params]
  );

  return {
    ...params,
    onChangeParameter,
    onChangeExtraParameter,
  };
};
