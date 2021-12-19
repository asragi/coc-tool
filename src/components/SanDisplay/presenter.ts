import { ChangeEvent } from 'react';
import { Presenter } from '../../utils/connect';
import { SanDisplayViewProps } from './view';

interface Props {
  currentSan: number;
  onChangeCurrentSan: (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
}

export const SanDisplayPresenter: Presenter<Props, SanDisplayViewProps> = ({
  currentSan,
  onChangeCurrentSan,
}: Props) => {
  const indefiniteValue = Math.floor(currentSan * 0.8);

  return {
    currentSan: currentSan.toString(),
    indefiniteValue: indefiniteValue.toString(),
    currentSanLabel: 'SAN',
    indefiniteLabel: '不定領域',
    onChangeCurrentSan,
  };
};
