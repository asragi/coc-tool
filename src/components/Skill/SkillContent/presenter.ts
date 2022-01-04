import { CharacterId } from '../../../models/character';
import { SkillRepository } from '../../../repositories/skillRepository';
import { Presenter } from '../../../utils/connect';
import { SkillContentViewProps } from './view';

interface Props {
  skillRepository: SkillRepository;
  characterId: CharacterId;
}

export const SkillContentPresenter: Presenter<Props, SkillContentViewProps> = ({
  skillRepository,
  characterId,
}: Props) => {
  return {
    skillRepository,
    characterId,
  };
};
