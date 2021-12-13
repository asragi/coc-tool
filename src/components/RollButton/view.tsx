import { Button, Typography } from '@mui/material';

export interface RollButtonViewProps {
  text: string;
  onRoll: () => void;
}

export const RollButtonView = ({ text, onRoll }: RollButtonViewProps) => {
  return (
    <Button variant='outlined' onClick={onRoll} sx={{ width: '100%' }}>
      <Typography>{text}</Typography>
    </Button>
  );
};
