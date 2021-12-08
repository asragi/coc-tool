import { Box, Stack } from '@mui/material';
import { FaceImage } from '../FaceImage';

export interface BasicInfoContentViewProps {}

export const BasicInfoContentView = () => {
  return (
    <Stack>
      <Stack direction="row">
        <FaceImage />
        <Box>Info</Box>
      </Stack>
      <Box>params</Box>
    </Stack>
  );
};
