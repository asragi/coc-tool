import { ChangeEvent, useCallback, useState } from 'react';
import { getUserParameter } from '../../infrastructures/dummy/parameterRepository';
import { ExtraParameter6, ParameterKey6, ParameterType } from '../../types';
import { Presenter } from '../../utils/connect';
import { ParameterMatrixViewProps } from './view';

interface Props {}
type ParameterKey = ParameterKey6;
type ExtraParameter = ExtraParameter6;

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({}: Props) => {
  const initialParameter = getUserParameter();
  const [params, setParams] = useState(initialParameter);

  const onChange = useCallback(
    (
      key: ParameterKey | ExtraParameter,
      type: ParameterType,
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      // Clone Object to Invoke setState
      const afterParams = {...params};
      // TODO: Implement Change Extra Parameters
      const afterNumber = Number(e.target.value);
      if (Number.isNaN(afterNumber)) {
        return;
      }
      afterParams.parameters[key as ParameterKey6][type] = afterNumber;
      setParams(afterParams);
    },
    [params]
  );

  return {
    ...params,
    onChange,
  };
};
