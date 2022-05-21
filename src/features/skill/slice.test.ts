import {
  fetchSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  skillReducer,
  updateSkillName,
} from './slice';
import { testCreateSkill } from './testHelper/testCreateSkill';
import { Skill, SkillCategory, SkillId, SkillProperty } from './types';

const skillA = testCreateSkill({ id: 'a' });
const skillB = testCreateSkill({ id: 'b' });


test('fetch skill', () => {
  const fetchedSkills = [skillA, skillB];

  expect(skillReducer(undefined, fetchSkills(fetchedSkills))).toEqual({
    skills: fetchedSkills,
  });
});

test('add skill', () => {
  const initialState = [skillA];
  const category: SkillCategory = 'battle';
  const newSkill = {
    label: 'skill1',
    initial: 15,
    jobPoint: 10,
    interestPoint: 4,
    mod: 3,
    tmp: 1,
    growth: 2,
    category,
  };
  const expectedSkill: Skill = {
    ...newSkill,
    id: 'skill1',
    deleted: false,
  };

  expect(skillReducer({ skills: initialState }, addSkill(newSkill))).toEqual({
    skills: [skillA, expectedSkill],
  });
});

test('update skill', () => {
  const initialState = { skills: [skillA, skillB] };
  const updateContent: { id: SkillId; property: SkillProperty; after: number } =
    {
      id: skillA.id,
      property: 'mod',
      after: 10,
    };
  const expectedSkill = {
    ...skillA,
    mod: 10,
  };

  expect(skillReducer(initialState, updateSkill(updateContent))).toEqual({
    skills: [expectedSkill, skillB],
  });
});

test('delete skill', () => {
  const initialState = { skills: [skillA, skillB] };
  const id = skillA.id;
  const after = {
    ...skillA,
    deleted: true,
  };

  expect(skillReducer(initialState, deleteSkill(id))).toEqual({
    skills: [after, skillB],
  });
});

test('update skill name', () => {
  const initialState = { skills: [skillA] };
  const afterName = 'updated';
  expect(
    skillReducer(
      initialState,
      updateSkillName({ id: skillA.id, name: afterName })
    )
  ).toEqual({
    skills: [
      {
        ...skillA,
        label: afterName,
      },
    ],
  });
});
