import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { CustomButton } from '../../components/CustomButton';
import { NameField } from './NameField';
import { SkillId, SkillProperty } from './types';

export type SkillRow = {
  id: SkillId;
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
  onChangeSkillValue: (props: {
    id: SkillId;
    property: SkillProperty;
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  }) => void;
}

export const SkillListContentView = ({
  header,
  skillList,
  onClickAdd,
  addButtonText,
  onChangeSkillValue,
}: SkillListContentViewProps) => {
  const renderSum = (value: number) => {
    return (
      <TableCell sx={{ p: 0 }}>
        <TextField
          inputProps={{ style: { textAlign: 'right' } }}
          value={value}
          type='number'
          sx={{ m: 0 }}
          disabled
        />
      </TableCell>
    );
  };
  const renderNumberInputField = (
    value: number,
    id: SkillId,
    p: SkillProperty
  ) => {
    return (
      <TableCell sx={{ p: 0 }}>
        <TextField
          inputProps={{ style: { textAlign: 'right' } }}
          value={value}
          type='number'
          sx={{ m: 0 }}
          onChange={(e) => onChangeSkillValue({ id, property: p, e })}
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
              <TableCell>
                <NameField id={skill.id} />
              </TableCell>
              {renderNumberInputField(skill.initial, skill.id, 'initial')}
              {renderNumberInputField(skill.jobPoint, skill.id, 'jobPoint')}
              {renderNumberInputField(
                skill.interestPoint,
                skill.id,
                'interestPoint'
              )}
              {renderNumberInputField(skill.mod, skill.id, 'mod')}
              {renderNumberInputField(skill.tmp, skill.id, 'tmp')}
              {renderNumberInputField(skill.growth, skill.id, 'growth')}
              {renderSum(skill.sum)}
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <CustomButton text={addButtonText} onClick={onClickAdd} />
    </div>
  );
};
