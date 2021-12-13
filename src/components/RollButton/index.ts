import { connect } from '../../utils/connect';
import { RollButtonPresenter } from './presenter';
import { RollButtonView } from './view';

export const RollButton = connect(RollButtonPresenter, RollButtonView);
