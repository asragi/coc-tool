import { Button, Typography } from '@mui/material';

export interface RollAllButtonViewProps {
  text: string;
  onRoll: () => void;
}

export const RollAllButtonView = ({ text, onRoll }: RollAllButtonViewProps) => {
  return (
    <Button variant='contained' onClick={onRoll}>
      <Typography>{text}</Typography>
    </Button>
  );
};
