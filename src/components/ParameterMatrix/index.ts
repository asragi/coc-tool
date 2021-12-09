import { connect } from '../../utils/connect';
import { ParameterMatrixPresenter } from './presenter';
import { ParameterMatrixView } from './view';

export const ParameterMatrix = connect(
  ParameterMatrixPresenter,
  ParameterMatrixView
);
