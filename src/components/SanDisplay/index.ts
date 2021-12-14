import { connect } from '../../utils/connect';
import { SanDisplayPresenter } from './presenter';
import { SanDisplayView } from './view';

export const SanDisplay = connect(SanDisplayPresenter, SanDisplayView);
