import { Box, Stack } from '@mui/material';
import { FaceImage } from '../FaceImage';
import { ProfileInput } from '../ProfileInput';

export interface BasicInfoContentViewProps {}

export const BasicInfoContentView = () => {
  return (
    <Stack direction='row'>
      <FaceImage />
      <ProfileInput />
    </Stack>
  );
};
