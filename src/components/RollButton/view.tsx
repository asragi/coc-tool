import { Button, Typography } from '@mui/material';

export interface RollButtonViewProps {
  text: string;
  onRoll: () => void;
}

export const RollButtonView = ({ text, onRoll }: RollButtonViewProps) => {
  return (
    <Button onClick={onRoll}>
      <Typography>{text}</Typography>
    </Button>
  );
};
