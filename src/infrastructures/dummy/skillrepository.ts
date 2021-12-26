import { SkillRow } from '../../types';

export const getSkill = (): SkillRow[] => {
  return [
    {
      label: 'こぶし',
      initial: 50,
      jobPoint: 0,
      interestPoint: 20,
      mod: 0,
      tmp: 0,
      growth: 3,
    },
    {
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
