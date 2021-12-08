import { ReactNode } from 'react';
import { Presenter } from '../../utils/connect';
import { CharacterInfoViewProps } from './view';

interface Props {
  headerText: string;
  innerContent: ReactNode;
}
export const CharacterInfoPresenter: Presenter<
  Props,
  CharacterInfoViewProps
> = ({ headerText, innerContent }: Props) => {
  return {
    headerText,
    innerContent,
  };
};
