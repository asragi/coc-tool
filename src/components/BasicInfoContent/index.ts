import { connect } from '../../utils/connect';
import { BasicInfoContentPresenter } from './presenter';
import { BasicInfoContentView } from './view';

export const BasicInfoContent = connect(
  BasicInfoContentPresenter,
  BasicInfoContentView
);
