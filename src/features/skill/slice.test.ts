import { fetch, skillReducer } from './slice';

test('fetch skill', () => {
  const fetchedSkills = [
    {
      label: 'Test',
      initial: 20,
      jobPoint: 20,
      interestPoint: 15,
      mod: 2,
      tmp: 5,
      growth: 6,
    },
  ];

  expect(skillReducer(undefined, fetch(fetchedSkills))).toEqual({
    skills: fetchedSkills,
  });
});
