import { getSkill } from '../../../infrastructures/dummy/skillrepository';
import { Presenter } from '../../../utils/connect';
import { SkillListContentViewProps } from './view';

interface Props {}

export const SkillListContentPresenter: Presenter<
  Props,
  SkillListContentViewProps
> = ({}: Props) => {
  const header = ['技能'];
  const skillList = getSkill();

  return {
    header,
    skillList,
  };
};
