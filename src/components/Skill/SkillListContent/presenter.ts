import { Presenter } from '../../../utils/connect';
import { SkillListContentViewProps } from './view';
import { useTranslation } from 'next-i18next';
import { SkillRepository } from '../../../repositories/skillRepository';
import { CharacterId } from '../../../models/character';

interface Props {
  skillRepository: SkillRepository;
  characterId: CharacterId;
}

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

  return {
    header,
    skillList,
  };
};
