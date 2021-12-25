import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { SkillRow } from '../../../types';

export interface SkillListContentViewProps {
  header: string[];
  skillList: { [key in SkillRow]: number }[];
}

export const SkillListContentView = ({
  header,
  skillList,
}: SkillListContentViewProps) => {
  return (
    <TableContainer component='table'>
      <TableHead>
        <TableRow>
          {header.map((label) => (
            <TableCell key={label}>{label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {skillList.map((skill) => (
          <TableRow key={skill.text}>
            <TableCell>{skill.text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
