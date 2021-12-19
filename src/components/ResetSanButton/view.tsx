import { Button } from '@mui/material';

export interface ResetSanButtonViewProps {
  onClick: () => void;
  text: string;
}

export const ResetSanButtonView = ({
  onClick,
  text,
}: ResetSanButtonViewProps) => {
  return (
    <Button variant='contained' sx={{ mr: 1 }} onClick={onClick}>
      {text}
    </Button>
  );
};
