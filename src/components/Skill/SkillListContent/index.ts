import { connect } from '../../../utils/connect';
import { SkillListContentPresenter } from './presenter';
import { SkillListContentView } from './view';

export const SkillListContent = connect(
  SkillListContentPresenter,
  SkillListContentView
);
