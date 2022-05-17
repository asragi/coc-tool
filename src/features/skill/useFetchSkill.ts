import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sleep } from '../../common/sleep';
import { ENV } from '../../config';
import { CharacterId } from '../../models/character';
import { initialSkills } from './constant/initialSkills';
import { getExistingSkillsSelector } from './selector';
import { fetchSkills } from './slice';

interface Props {
  id: CharacterId;
  url: URL;
};

export const useFetchSkill = ({ id, url }: Props) => {
  const dispatch = useDispatch();
  const skills = useSelector(getExistingSkillsSelector);
  const urlString = url.toString();

  useEffect(() => {
    if (ENV === 'development') {
      sleep(1, () => dispatch(fetchSkills(initialSkills)));

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
