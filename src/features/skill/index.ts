import { config } from '../../config';
import { CharacterId } from '../../models/character';
import { SkillListContentPresenter } from './presenter';
import { useFetchSkill } from './useFetchSkill';
import { SkillListContentView } from './view';

interface Props {
  id: CharacterId;
}

const fetchUrl = new URL(config.fetchSkillEndPoint);

export const SkillListContent = ({ id }: Props) => {
  const fetchResult = useFetchSkill({
    url: fetchUrl,
    id,
  });
  const { skills } = fetchResult;

  return SkillListContentView(SkillListContentPresenter({skillList: skills}));
};
