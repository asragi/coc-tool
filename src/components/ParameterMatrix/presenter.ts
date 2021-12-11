import { getUserParameter } from '../../infrastructures/dummy/parameterRepository';
import { Presenter } from '../../utils/connect';
import { ParameterMatrixViewProps } from './view';

interface Props {}

export const ParameterMatrixPresenter: Presenter<
  Props,
  ParameterMatrixViewProps
> = ({}: Props) => {
  return getUserParameter();
};
