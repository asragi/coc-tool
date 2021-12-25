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
  skillList: SkillRow[];
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
          <TableRow key={skill.label}>
            <TableCell>{skill.label}</TableCell>
            <TableCell>{skill.initial}</TableCell>
            <TableCell>{skill.jobPoint}</TableCell>
            <TableCell>{skill.interestPoint}</TableCell>
            <TableCell>{skill.mod}</TableCell>
            <TableCell>{skill.tmp}</TableCell>
            <TableCell>{skill.growth}</TableCell>
            <TableCell>{skill.initial}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
