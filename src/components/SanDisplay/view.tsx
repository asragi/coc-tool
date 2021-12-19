import { Stack, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export interface SanDisplayViewProps {
  currentSan: string;
  indefiniteValue: string;
  currentSanLabel: string;
  indefiniteLabel: string;
  onChangeCurrentSan: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const SanDisplayView = ({
  currentSan,
  indefiniteValue,
  currentSanLabel,
  indefiniteLabel,
  onChangeCurrentSan,
}: SanDisplayViewProps) => {
  return (
    <Stack direction='row' spacing={1}>
      <TextField
        value={currentSan}
        label={currentSanLabel}
        type='number'
        inputProps={{ style: { textAlign: 'right' } }}
        onChange={onChangeCurrentSan}
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
