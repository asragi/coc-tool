import { connect } from '../../../utils/connect';
import { SkillContentView } from './view';
import { SkillContentPresenter } from './presenter';

export const SkillContent = connect(SkillContentPresenter, SkillContentView);
