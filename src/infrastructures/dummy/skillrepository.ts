import { CharacterId } from '../../models/character';
import { Skill } from '../../models/skill';

export const fetchAll = (_: CharacterId): Skill[] => {
  const ownerId = 'test_owner';

  return [
    {
      owner: ownerId,
      label: 'こぶし',
      initial: 50,
      jobPoint: 0,
      interestPoint: 20,
      mod: 0,
      tmp: 0,
      growth: 3,
    },
    {
      owner: ownerId,
      label: 'マーシャルアーツ',
      initial: 25,
      jobPoint: 15,
      interestPoint: 0,
      mod: 0,
      tmp: 0,
      growth: 4,
    },
  ];
};
