export type SkillId = string;
export type SkillCategory =
  | 'battle'
  | 'explore'
  | 'action'
  | 'negotiate'
  | 'knowledge';

export type InitialSkill = Omit<Skill, 'id' | 'deleted'>;

export type Skill = SkillValue & {
  id: SkillId;
  label: string;
  deleted: boolean;
  category: SkillCategory;
};

export type SkillValue = {
  initial: number;
  jobPoint: number;
  interestPoint: number;
  mod: number;
  tmp: number;
  growth: number;
};

export type SkillProperty = keyof SkillValue;
