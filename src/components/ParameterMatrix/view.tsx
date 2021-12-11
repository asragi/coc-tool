import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { ChangeEvent } from 'react';
import {
  ExtraParameter6,
  ParameterKey6,
  ParameterType,
  ParameterTypes,
} from '../../types';

type ParameterKey = ParameterKey6;

type ParameterSet = {
  [key in ParameterKey]: { [key in ParameterType]: number };
};

type ExtraParameter = ExtraParameter6;

type ExtraParameterSet = {
  [key in ExtraParameter]: { [key in ParameterType]: number };
};

export interface ParameterMatrixViewProps {
  parameters: ParameterSet;
  extraParams: ExtraParameterSet;
  onChange: (
    key: ParameterKey | ExtraParameter,
    t: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterMatrixView = ({
  parameters,
  extraParams,
  onChange,
}: ParameterMatrixViewProps) => {
  const inputStyle = { margin: 0 };

  const renderHeader = (values: {
    [key: string]: { [key in ParameterType]: number };
  }) => {
    return Object.keys(values).map((key) => (
      <TableCell key={key}>{key}</TableCell>
    ));
  };

  const renderCellSet = function <T extends (ParameterKey | ExtraParameter)>(
    values: {
      [key in T]: {
        [key in ParameterType]: number;
      };
    },
    type: ParameterType
  ) {
    const keys = Object.keys(values) as T[];

    return keys.map((key, i) => (
      <TableCell key={`${type}:${i}`} sx={{ padding: 0 }}>
        <TextField
          type='number'
          inputProps={{ min: 0 }}
          value={values[key][type]}
          sx={inputStyle}
          onChange={(e) => onChange(key, type, e)}
        />
      </TableCell>
    ));
  };

  return (
    <TableContainer component='table'>
      <TableHead>
        <TableRow>
          <TableCell />
          {renderHeader(parameters)}
          {renderHeader(extraParams)}
        </TableRow>
      </TableHead>
      <TableBody>
        {ParameterTypes.map((type: ParameterType) => {
          return (
            <TableRow key={type}>
              <TableCell>{type}</TableCell>
              {renderCellSet(parameters, type)}
              {renderCellSet(extraParams, type)}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};
