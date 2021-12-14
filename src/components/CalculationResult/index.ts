import { connect } from '../../utils/connect';
import { CalculationResultPresenter } from './presenter';
import { CalculationResultView } from './view';

export const CalculationResult = connect(
  CalculationResultPresenter,
  CalculationResultView
);
