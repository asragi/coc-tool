import { connect } from '../../utils/connect';
import { ParameterContentPresenter } from './presenter';
import { ParameterContentView } from './view';

export const ParameterContent = connect(
  ParameterContentPresenter,
  ParameterContentView
);
