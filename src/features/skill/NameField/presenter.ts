import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateSkillName } from '../slice';
import { SkillId } from '../types';
import { NameFieldViewProps } from './view';

export interface Props {
  name: string;
  id: SkillId;
}

export const NameFieldPresenter = ({ name, id }: Props): NameFieldViewProps => {
  const dispatch = useDispatch();
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(updateSkillName({ id, name: e.target.value }));
    },
    [dispatch, id]
  );

  return {
    name,
    onChange,
  };
};
