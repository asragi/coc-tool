import { connect } from '../../utils/connect';
import { RollAllButtonPresenter } from './presenter';
import { RollAllButtonView } from './view';

export const RollAllButton = connect(RollAllButtonPresenter, RollAllButtonView);
