import { Stack } from '@mui/material';
import { SkillListContent } from '../SkillListContent';

export interface SkillContentViewProps {}

export const SkillContentView = ({}: SkillContentViewProps) => {
  return <Stack><SkillListContent /></Stack>;
};
