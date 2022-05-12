import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { skillNameSelector } from '../selector';
import { SkillId } from '../types';

interface Props {
  id: SkillId;
}

export const useSkillName = ({ id }: Props) => {
  const name = useSelector<RootState, string>((state) =>
    skillNameSelector(state, id)
  );

  return { name };
};
