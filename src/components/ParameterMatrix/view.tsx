import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { ParameterKey, ParameterType, ParameterTypes } from '../../types';
import { RollButton } from '../RollButton';

type ParameterSet = {
  [key in ParameterKey]: { [key in ParameterType]: number };
};

export interface ParameterMatrixViewProps {
  parameters: ParameterSet;
  onChangeParameter: (
    key: ParameterKey,
    t: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterMatrixView = ({
  parameters,
  onChangeParameter,
}: ParameterMatrixViewProps) => {
  const inputStyle = { margin: 0 };

  const renderHeader = (values: {
    [key: string]: { [key in ParameterType]: number };
  }) => {
    return Object.keys(values).map((key) => (
      <TableCell align='center' key={key} sx={{ padding: 0 }}>
        {key}
      </TableCell>
    ));
  };

  const renderCellSet = (
    values: {
      [key in ParameterKey]: {
        [key in ParameterType]: number;
      };
    },
    type: ParameterType
  ) => {
    const keys = Object.keys(values) as ParameterKey[];

    return keys.map((key, i) => (
      <TableCell key={`${type}:${i}`} sx={{ padding: 0 }}>
        <TextField
          type='number'
          inputProps={{ min: 0 }}
          value={values[key][type]}
          sx={inputStyle}
          onChange={(e) => onChangeParameter(key, type, e)}
        />
      </TableCell>
    ));
  };

  return (
    <TableContainer component='table'>
      <TableHead>
        <TableRow>
          <TableCell />
          {(Object.keys(parameters) as ParameterKey[]).map(
            (key: ParameterKey) => (
              <TableCell align='center' key={key} sx={{ padding: 0 }}>
                <RollButton onRoll={() => {}} />
              </TableCell>
            )
          )}
        </TableRow>
        <TableRow>
          <TableCell />
          {renderHeader(parameters)}
        </TableRow>
      </TableHead>
      <TableBody>
        {ParameterTypes.map((type: ParameterType) => {
          return (
            <TableRow key={type}>
              <TableCell>{type}</TableCell>
              {renderCellSet(parameters, type)}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};
