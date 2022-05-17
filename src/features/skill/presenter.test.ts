import { SkillListContentPresenter } from './presenter';
import { Skill } from './types';

jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: () => {},
  }),
}));

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('react', () => ({
  useCallback: (f: () => void, _: any) => { return f; },
}));

const skill: Skill = {
  id: 't',
  label: 'test',
  initial: 20,
  jobPoint: 10,
  interestPoint: 10,
  mod: -5,
  tmp: 2,
  growth: 3,
  deleted: false,
  category: 'action',
};

test('skill list content presenter', () => {
  const result = SkillListContentPresenter({ skillList: [skill] });
  const { skillList } = result;
  const resultSkillRow = skillList[0];
  const expectSum =
    skill.initial +
    skill.jobPoint +
    skill.interestPoint +
    skill.mod +
    skill.tmp +
    skill.growth;
  expect(resultSkillRow.sum).toBe(expectSum);
  expect(skillList.length).toBe(1);
  expect(mockDispatch).not.toHaveBeenCalled();
  result.onClickAdd();
  expect(mockDispatch).toHaveBeenCalled();
});
