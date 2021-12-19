import { connect } from '../../utils/connect';
import { ResetSanButtonPresenter } from './presenter';
import { ResetSanButtonView } from './view';

export const ResetSanButton = connect(
  ResetSanButtonPresenter,
  ResetSanButtonView
);
