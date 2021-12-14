import { Presenter } from '../../../utils/connect';
import { decideDamageBonus } from '../../../utils/decideDamageBonus';
import { DisplayDamageBonusViewProps } from './view';

interface Props {
  label: string;
  str: number;
  siz: number;
}

export const DisplayDamageBonusPresenter: Presenter<
  Props,
  DisplayDamageBonusViewProps
> = ({ label, str, siz }: Props) => {
  const dbString = decideDamageBonus(str, siz);

  return {
    label,
    value: dbString,
  };
};
