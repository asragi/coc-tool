import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { addSkill } from './slice';
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

const initialSkill: Omit<Skill, 'id' | 'deleted'> = {
  label: 'new',
  initial: 50,
  jobPoint: 0,
  interestPoint: 0,
  mod: 0,
  tmp: 0,
  growth: 0,
};

export const SkillListContentPresenter = ({ skillList }: Props) => {
  const dispatch = useDispatch();
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
  const addButtonText = 'Add';
  const skillRows = skillList.map(s => calcSum(s));

  const onClickAdd = () => {
    dispatch(addSkill(initialSkill));
  };

  return {
    header,
    skillList: skillRows,
    onClickAdd,
    addButtonText,
  };
};
