import { useTranslation } from 'next-i18next';
import { Skill } from './types';
import { SkillRow } from './view';

interface Props {
  skillList: Skill[];
}

const calcSum = (skill: Skill): SkillRow => {
  const sum =
    skill.initial +
    skill.jobPoint +
    skill.interestPoint +
    skill.mod +
    skill.tmp +
    skill.growth;

  return {
    ...skill,
    sum,
  };
};

export const SkillListContentPresenter = ({ skillList }: Props) => {
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
  const skillRows = skillList.map(s => calcSum(s));

  return {
    header,
    skillList: skillRows,
  };
};
