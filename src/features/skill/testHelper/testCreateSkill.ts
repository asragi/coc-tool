import { Skill, SkillCategory } from '../types';

const defaultCategory: SkillCategory = 'battle';

export const testCreateSkill = ({
  id = 'test',
  label = 'TEST-LABEL',
  initial = 50,
  mod = 0,
  tmp = 0,
  growth = 0,
  interestPoint = 0,
  jobPoint = 0,
  deleted = false,
  category = defaultCategory,
} = {}): Skill => ({
  id,
  label,
  initial,
  mod,
  tmp,
  growth,
  deleted,
  interestPoint,
  jobPoint,
  category,
});
