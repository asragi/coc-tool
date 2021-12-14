import { Presenter } from '../../utils/connect';
import { SanDisplayViewProps } from './view';

interface Props {
  currentSan: number;
}

export const SanDisplayPresenter: Presenter<Props, SanDisplayViewProps> = ({
  currentSan,
}: Props) => {
  const indefiniteValue = Math.floor(currentSan * 0.8);

  return {
    currentSan: currentSan.toString(),
    indefiniteValue: indefiniteValue.toString(),
    currentSanLabel: 'SAN',
    indefiniteLabel: '不定領域',
  };
};
