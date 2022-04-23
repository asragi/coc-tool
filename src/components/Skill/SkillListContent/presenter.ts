import { Presenter } from '../../../utils/connect';
import { SkillListContentViewProps } from './view';
import { useTranslation } from 'next-i18next';
import { SkillRepository } from '../../../repositories/skillRepository';
import { CharacterId } from '../../../models/character';
import { Skill } from '../../../models/skill';
import { SkillRow } from '../../../types';

interface Props {
  skillRepository: SkillRepository;
  characterId: CharacterId;
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

export const SkillListContentPresenter: Presenter<
  Props,
  SkillListContentViewProps
> = ({ skillRepository, characterId }: Props) => {
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
  const skillList = skillRepository.fetchAll(characterId);
  const skillRows = skillList.map(s => calcSum(s));

  return {
    header,
    skillList: skillRows,
  };
};
