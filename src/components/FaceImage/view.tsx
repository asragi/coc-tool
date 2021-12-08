import { Avatar } from '@mui/material';

export interface FaceImageViewProps {}

const SIZE = 128;

export const FaceImageView = ({}: FaceImageViewProps) => {
  return <Avatar sx={{ width: SIZE, height: SIZE, mr: 1 }} />;
};
