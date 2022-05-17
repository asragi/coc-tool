import { Skill, SkillCategory, SkillId } from '../types';

const trans = (key: string): string => key;

type DraftSkill = { id: SkillId; initial: number };

const skillsGenerator = (
  skills: DraftSkill[],
  category: SkillCategory
): Skill[] =>
  skills.map((skill) => ({
    ...skill,
    label: trans(skill.id),
    category,
    mod: 0,
    tmp: 0,
    growth: 0,
    interestPoint: 0,
    jobPoint: 0,
    deleted: false,
  }));

const battle = skillsGenerator([
  { id: 'dodge', initial: 25 },
  { id: 'kick', initial: 25 },
], 'battle');
const explore = skillsGenerator([], 'explore');
const action = skillsGenerator([], 'action');
const negotiate = skillsGenerator([], 'negotiate');
const knowledge = skillsGenerator([], 'knowledge');

export const initialSkills: Skill[] = battle.concat(
  explore,
  action,
  negotiate,
  knowledge
);
