import { getSkill } from '../../../infrastructures/dummy/skillrepository';
import { Presenter } from '../../../utils/connect';
import { SkillListContentViewProps } from './view';
import { useTranslation } from 'next-i18next';

interface Props {}

export const SkillListContentPresenter: Presenter<
  Props,
  SkillListContentViewProps
> = ({}: Props) => {
  const { t } = useTranslation('common');
  const header = [
    t('skill'),
    t('initial'),
    t('jobPoint'),
    t('interestPoint'),
    t('mod'),
    t('tmp'),
    t('growth'),
    t('sum'),
  ];
  const skillList = getSkill();

  return {
    header,
    skillList,
  };
};
