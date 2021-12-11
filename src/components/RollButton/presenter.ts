import { Presenter } from '../../utils/connect';
import { RollButtonViewProps } from './view';

interface Props {
  onRoll: () => void;
}

export const RollButtonPresenter: Presenter<Props, RollButtonViewProps> = ({
  onRoll,
}: Props) => {
  const text = 'Roll';

  return { text, onRoll };
};
