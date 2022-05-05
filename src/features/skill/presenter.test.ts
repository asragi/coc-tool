import { SkillListContentPresenter } from './presenter';

jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: () => {},
  }),
}));

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

const skill = {
  id: 1,
  label: 'test',
  initial: 20,
  jobPoint: 10,
  interestPoint: 10,
  mod: -5,
  tmp: 2,
  growth: 3,
  deleted: false,
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
