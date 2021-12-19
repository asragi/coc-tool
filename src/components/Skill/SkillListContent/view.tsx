import { TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export interface SkillListContentViewProps {
  skillList: { text: string; value: number }[];
}

export const SkillListContentView = ({
  skillList,
}: SkillListContentViewProps) => {
  return <TableContainer component='table'>
    <TableHead>
      <TableRow>
        <TableCell>技能</TableCell>
        <TableCell>初期</TableCell>
        <TableCell>修正</TableCell>
        <TableCell>一時</TableCell>
        <TableCell>成長</TableCell>
        <TableCell>合計</TableCell>
      </TableRow>
    </TableHead>
  </TableContainer>;
};
