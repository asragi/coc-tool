import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CharacterId } from '../../models/character';
import { batchGetSelector } from './selector';
import { fetchPosts } from './slice';

interface Props {
  id: CharacterId;
  url: URL;
}

export const useFetchSkill = ({ id, url }: Props) => {
  const dispatch = useDispatch();
  const skills = useSelector(batchGetSelector);
  const urlString = url.toString();

  useEffect(() => {
    fetch(urlString)
      .then((res) => res.json())
      .then((data) => dispatch(fetchPosts(data)));
  }, [dispatch, urlString]);

  return {
    skills
  };
};
