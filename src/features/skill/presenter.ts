import { useTranslation } from 'next-i18next';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addSkill, deleteSkill, updateSkill } from './slice';
import { Skill, SkillId, SkillProperty } from './types';
import { SkillRow } from './view';

interface Props {
  skillList: Skill[];
}

const calcSum = (skill: Skill): SkillRow => {
  const sum =
    skill.initial +
    skill.jobPoint +
    skill.interestPoint +
    skill.mod +
    skill.tmp +
    skill.growth;

  return {
    ...skill,
    sum,
  };
};

const initialSkill: Omit<Skill, 'id' | 'deleted'> = {
  label: 'new',
  initial: 50,
  jobPoint: 0,
  interestPoint: 0,
  mod: 0,
  tmp: 0,
  growth: 0,
  category: 'battle',
};

export const SkillListContentPresenter = ({ skillList }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const header = [
    t('skill'),
    t('initial'),
    t('jobPoint'),
    t('interestPoint'),
    t('mod'),
    t('tmp'),
    t('growth'),
    t('sum'),
  ];
  const addButtonText = 'Add';
  const deleteText = 'delete';
  const skillRows = skillList.map((s) => calcSum(s));

  const onClickAdd = useCallback(() => {
    dispatch(addSkill(initialSkill));
  }, [dispatch]);

  const onChangeSkillValue = useCallback(
    ({
      e,
      id,
      property,
    }: {
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
      id: SkillId;
      property: SkillProperty;
    }) => {
      dispatch(updateSkill({ id, property, after: Number(e.target.value) }));
    },
    [dispatch]
  );

  const onClickDelete = useCallback(
    ({ id }: { id: SkillId }) => {
      dispatch(deleteSkill(id));
    },
    [dispatch]
  );

  return {
    header,
    skillList: skillRows,
    onClickAdd,
    addButtonText,
    onChangeSkillValue,
    onDeleteSkill: onClickDelete,
    deleteText,
  };
};
