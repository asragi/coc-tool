import { connect } from '../../../utils/connect';
import { DisplayDamageBonusPresenter } from './presenter';
import { DisplayDamageBonusView } from './view';

export const DisplayDamageBonus = connect(
  DisplayDamageBonusPresenter,
  DisplayDamageBonusView
);
