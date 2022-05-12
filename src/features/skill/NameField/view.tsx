import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export interface NameFieldViewProps {
  name: string;
  onChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

export const NameFieldView = ({ name, onChange }: NameFieldViewProps) => {
  return <TextField type='text' sx={{ m: 0 }} value={name} onChange={e => onChange(e)} />;
};
