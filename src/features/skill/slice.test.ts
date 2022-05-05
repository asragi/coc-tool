import {
  fetchSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  skillReducer,
} from './slice';

const skillA = {
  id: 1,
  label: 'Test',
  initial: 20,
  jobPoint: 20,
  interestPoint: 15,
  mod: 2,
  tmp: 5,
  growth: 6,
  deleted: false,
};

const skillB = {
  id: 2,
  label: 'TestB',
  initial: 20,
  jobPoint: 20,
  interestPoint: 15,
  mod: 2,
  tmp: 5,
  growth: 6,
  deleted: false,
};

test('fetch skill', () => {
  const fetchedSkills = [skillA, skillB];

  expect(skillReducer(undefined, fetchSkills(fetchedSkills))).toEqual({
    skills: fetchedSkills,
  });
});

test('add skill', () => {
  const initialState = [skillA];
  const newSkill = {
    label: 'TestC',
    initial: 15,
    jobPoint: 10,
    interestPoint: 4,
    mod: 3,
    tmp: 1,
    growth: 2,
  };
  const expectedSkill = {
    ...newSkill,
    id: 2,
    deleted: false,
  };

  expect(skillReducer({ skills: initialState }, addSkill(newSkill))).toEqual({
    skills: [skillA, expectedSkill],
  });
});

test('update skill', () => {
  const initialState = { skills: [skillA, skillB] };
  const afterSkillA = {
    ...skillA,
    mod: 10,
  };

  expect(skillReducer(initialState, updateSkill(afterSkillA))).toEqual({
    skills: [afterSkillA, skillB],
  });
});

test('delete skill', () => {
  const initialState = { skills: [skillA, skillB] };
  const after = {
    ...skillA,
    deleted: true,
  };

  expect(skillReducer(initialState, deleteSkill(1))).toEqual({
    skills: [after, skillB],
  });
});
