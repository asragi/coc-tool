export type SkillId = number;

export type Skill = {
  id: SkillId;
  label: string;
  initial: number;
  jobPoint: number;
  interestPoint: number;
  mod: number;
  tmp: number;
  growth: number;
};
