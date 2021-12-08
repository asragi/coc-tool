import { Presenter } from '../../utils/connect';
import { ProfileInputViewProps } from './view';

interface Props {}

export const ProfileInputPresenter: Presenter<
  Props,
  ProfileInputViewProps
> = ({}: Props) => {
  return {
    nameLabel: '名前',
    jobLabel: '職業',
    ageLabel: '年齢',
    genderLabel: '性別',
    heightLabel: '身長',
    weightLabel: '体重',
    fromLabel: '出身',
  };
};
