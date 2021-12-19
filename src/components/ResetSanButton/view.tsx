import { Button } from '@mui/material';

export interface ResetSanButtonViewProps {
  onClick: () => void;
  text: string;
}

export const ResetSanButtonView = ({
  onClick,
  text,
}: ResetSanButtonViewProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};
