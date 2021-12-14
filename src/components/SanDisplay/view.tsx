import { Stack, TextField } from '@mui/material';

export interface SanDisplayViewProps {
  currentSan: string;
  indefiniteValue: string;
  currentSanLabel: string;
  indefiniteLabel: string;
}

export const SanDisplayView = ({
  currentSan,
  indefiniteValue,
  currentSanLabel,
  indefiniteLabel,
}: SanDisplayViewProps) => {
  return (
    <Stack direction='row'>
      <TextField value={currentSan} label={currentSanLabel} />
      <TextField value={indefiniteValue} label={indefiniteLabel} />
    </Stack>
  );
};
