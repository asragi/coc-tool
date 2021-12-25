import { Presenter } from '../../../utils/connect';
import { SkillListContentViewProps } from './view';

interface Props {}

export const SkillListContentPresenter: Presenter<
  Props,
  SkillListContentViewProps
> = ({}: Props) => {
  const header = ['技能'];

  return {
    header,
    skillList: [],
  };
};
