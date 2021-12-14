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
    <Stack direction='row' spacing={1}>
      <TextField
        value={currentSan}
        label={currentSanLabel}
        type='number'
        inputProps={{ style: { textAlign: 'right' } }}
      />
      <TextField
        value={indefiniteValue}
        label={indefiniteLabel}
        type='number'
        disabled
        inputProps={{ style: { textAlign: 'right', cursor: 'not-allowed' } }}
      />
    </Stack>
  );
};
