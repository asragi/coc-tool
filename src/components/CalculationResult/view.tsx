import { Stack } from '@mui/material';
import { DisplayDamageBonus } from './DisplayDamageBonus';

export interface CalculationResultViewProps {
  damageBonusLabel: string,
  str: number,
  siz: number,
}

export const CalculationResultView = ({
  damageBonusLabel,
  str,
  siz,
}: CalculationResultViewProps) => {
  return <Stack>
    <DisplayDamageBonus
      label={damageBonusLabel}
      str={str}
      siz={siz}
    />
  </Stack>;
};
