import { Presenter } from '../../utils/connect';
import { CalculationResultViewProps } from './view';

interface Props {
  str: number;
  siz: number;
}

export const CalculationResultPresenter: Presenter<
  Props,
  CalculationResultViewProps
> = ({ str, siz }: Props) => {
  const damageBonusLabel = 'Damage Bonus';

  return {
    damageBonusLabel,
    str,
    siz,
  };
};
