import { Presenter } from '../../utils/connect';
import { RollAllButtonViewProps } from './view';

interface Props {
  onRoll: () => void;
}

export const RollAllButtonPresenter: Presenter<Props, RollAllButtonViewProps> = ({
  onRoll,
}: Props) => {
  const text = 'Roll All';

  return { text, onRoll };
};
