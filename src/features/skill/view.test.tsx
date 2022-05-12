import {
  fireEvent,
  render,
  RenderResult,
} from '@testing-library/react';
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

jest.mock('./NameField', () => ({
  NameField: () => 'NameField',
}));

describe('skill list view', () => {
  const onClickAdd = jest.fn();
  const onDelete = jest.fn();
  const buttonText = 'Button Text';
  const deleteText = 'Delete';
  const skill = [{ ...createInitialSkill(), id: 1, deleted: false, sum: 50 }];

  let result: RenderResult;

  beforeEach(() => {
    result = render(
      <SkillListContentView
        onClickAdd={onClickAdd}
        header={header}
        skillList={skill}
        addButtonText={buttonText}
        onChangeSkillValue={() => {}}
        onDeleteSkill={onDelete}
        deleteText={deleteText}
      />
    );
  });

  test('onClick', () => {
    expect(onClickAdd).not.toHaveBeenCalled();
    const button = result.queryByText(buttonText);
    if (!button) throw new Error('button component was not found.');
    fireEvent.click(button);
    expect(onClickAdd).toHaveBeenCalled();
  });
  test('onDelete', () => {
    expect(onDelete).not.toBeCalled();
    const button = result.queryByText(deleteText);
    if (!button) throw new Error('delete button component was not found.');
    fireEvent.click(button);
    expect(onDelete).toHaveBeenCalled();
  });
});
