import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { CustomButton } from '../../components/CustomButton';

export type SkillRow = {
  label: string;
  initial: number;
  jobPoint: number;
  interestPoint: number;
  mod: number;
  tmp: number;
  growth: number;
  sum: number;
};

export interface SkillListContentViewProps {
  header: string[];
  skillList: SkillRow[];
  onClickAdd: () => void;
  addButtonText: string;
}

export const SkillListContentView = ({
  header,
  skillList,
  onClickAdd,
  addButtonText,
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
    <div>
      <TableContainer component='table'>
        <TableHead>
          <TableRow>
            {header.map((label) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {skillList.map((skill, index) => (
            <TableRow key={index}>
              <TableCell>{skill.label}</TableCell>
              {renderNumberInputField(skill.initial)}
              {renderNumberInputField(skill.jobPoint)}
              {renderNumberInputField(skill.interestPoint)}
              {renderNumberInputField(skill.mod)}
              {renderNumberInputField(skill.tmp)}
              {renderNumberInputField(skill.growth)}
              {renderNumberInputField(skill.sum)}
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <CustomButton
        text={addButtonText}
        onClick={onClickAdd}
      />
    </div>
  );
};
