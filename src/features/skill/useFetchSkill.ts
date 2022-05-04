import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sleep } from '../../common/sleep';
import { ENV } from '../../config';
import { CharacterId } from '../../models/character';
import { batchGetSelector } from './selector';
import { fetchSkills } from './slice';
import { Skill } from './types';

interface Props {
  id: CharacterId;
  url: URL;
}

const testSkillData: Skill[] = [{
  id: 0,
  label: 'マーシャルアーツ',
  initial: 50,
  jobPoint: 15,
  interestPoint: 10,
  mod: 0,
  tmp: 1,
  growth: 3,
}];

export const useFetchSkill = ({ id, url }: Props) => {
  const dispatch = useDispatch();
  const skills = useSelector(batchGetSelector);
  const urlString = url.toString();

  useEffect(() => {
    if (ENV === 'development') {
      sleep(1, () => dispatch(fetchSkills(testSkillData)));

      return;
    }
    fetch(urlString)
      .then((res) => res.json())
      .then((data) => dispatch(fetchSkills(data)));
  }, [dispatch, urlString]);

  return {
    skills,
  };
};
