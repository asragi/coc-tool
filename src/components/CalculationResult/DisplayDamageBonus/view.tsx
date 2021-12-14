import { TextField } from "@mui/material";

export interface DisplayDamageBonusViewProps {
  label: string;
  value: string;
}

export const DisplayDamageBonusView = ({
  label,
  value,
}: DisplayDamageBonusViewProps) => {
  return <TextField label={label} value={value}/>;
};
