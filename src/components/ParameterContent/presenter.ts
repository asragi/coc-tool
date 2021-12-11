import {
  getUserExtraParameter,
  getUserParameter,
} from '../../infrastructures/dummy/parameterRepository';
import { Version } from '../../types';
import { Presenter } from '../../utils/connect';
import { ParameterContentViewProps } from './view';

interface Props {
  version: Version;
}

export const ParameterContentPresenter: Presenter<
  Props,
  ParameterContentViewProps
> = ({ version }: Props) => {
  const parameter = getUserParameter(version);
  const extraParameter = getUserExtraParameter(version);

  const onChangeParameter = () => {};

  const onChangeExtraParameter = () => {};

  return {
    parameter,
    extraParameter,
    onChangeParameter,
    onChangeExtraParameter,
  };
};
