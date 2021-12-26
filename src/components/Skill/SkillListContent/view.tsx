import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
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
  const renderNumberInputField = (value: number) => {
    return (
      <TableCell sx={{ p: 0 }}>
        <TextField
          inputProps={{ style: { textAlign: 'right' } }}
          value={value}
          type='number'
          sx={{ m: 0 }}
        />
      </TableCell>
    );
  };

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
            {renderNumberInputField(skill.initial)}
            {renderNumberInputField(skill.jobPoint)}
            {renderNumberInputField(skill.interestPoint)}
            {renderNumberInputField(skill.mod)}
            {renderNumberInputField(skill.tmp)}
            {renderNumberInputField(skill.growth)}
            {renderNumberInputField(skill.initial)}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
