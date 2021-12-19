import { Presenter } from '../../utils/connect';
import { ResetSanButtonViewProps } from './view';

interface Props {
  onClick: () => void;
}

export const ResetSanButtonPresenter: Presenter<
  Props,
  ResetSanButtonViewProps
> = ({ onClick }: Props) => {
  const text = 'Reset SAN';

  return {
    text,
    onClick,
  };
};
