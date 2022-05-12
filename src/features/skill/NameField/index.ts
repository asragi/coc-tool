import { SkillId } from '../types';
import { NameFieldPresenter } from './presenter';
import { useSkillName } from './useSkillName';
import { NameFieldView } from './view';

interface Props {
  id: SkillId;
}

export const NameField = ({ id }: Props) => {
  const { name } = useSkillName({ id });

  return NameFieldView(NameFieldPresenter({ id, name }));
};
