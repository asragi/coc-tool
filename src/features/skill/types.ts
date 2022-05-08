export type SkillId = number;

export type InitialSkill = Omit<Skill, 'id' | 'deleted'>;

export const createInitialSkill: () => InitialSkill = () => ({
  label: 'new',
  initial: 50,
  jobPoint: 0,
  interestPoint: 0,
  mod: 0,
  tmp: 0,
  growth: 0,
});

export type Skill = {
  id: SkillId;
  label: string;
  initial: number;
  jobPoint: number;
  interestPoint: number;
  mod: number;
  tmp: number;
  growth: number;
  deleted: boolean;
};

export type SkillProperty = keyof Skill;
