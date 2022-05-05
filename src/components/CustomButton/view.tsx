import { Button } from "@mui/material";

export interface CustomButtonViewProps {
  text: string;
  onClick: () => {};
  className?: string;
}

export const CustomButtonView = ({ text, onClick, className }: CustomButtonViewProps) => {
  return (
    <Button onClick={onClick} className={className}>{text}</Button>
  );
};
