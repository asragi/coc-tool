import { fireEvent, render } from '@testing-library/react';
import { createInitialSkill } from './types';
import { SkillListContentView } from './view';

const header = [
  'skill',
  'initial',
  'jobPoint',
  'interest',
  'mod',
  'tmp',
  'growth',
  'sum',
];

test('skill list view', () => {
  const onClickAdd = jest.fn();
  const buttonText = 'Button Text';
  const skill = [{ ...createInitialSkill(), id: 1, deleted: false, sum: 50 }];
  const result = render(
    <SkillListContentView
      onClickAdd={onClickAdd}
      header={header}
      skillList={skill}
      addButtonText={buttonText}
    />
  );
  expect(onClickAdd).not.toHaveBeenCalled();
  const button = result.queryByText(buttonText);
  if (!button) throw new Error('button component was not found.');
  fireEvent.click(button);
  expect(onClickAdd).toHaveBeenCalled();
});
