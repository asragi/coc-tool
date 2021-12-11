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
  ExtraParameterKey,
  ParameterKey,
  ParameterType,
  ParameterTypes,
} from '../../types';

type ParameterSet = {
  [key in ParameterKey]: { [key in ParameterType]: number };
};

type ExtraParameterSet = {
  [key in ExtraParameterKey]: { [key in ParameterType]: number };
};

export interface ParameterMatrixViewProps {
  parameters: ParameterSet;
  extraParams: ExtraParameterSet;
  onChangeParameter: (
    key: ParameterKey,
    t: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onChangeExtraParameter: (
    key: ExtraParameterKey,
    t: ParameterType,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ParameterMatrixView = ({
  parameters,
  extraParams,
  onChangeParameter,
  onChangeExtraParameter,
}: ParameterMatrixViewProps) => {
  const inputStyle = { margin: 0 };

  const renderHeader = (values: {
    [key: string]: { [key in ParameterType]: number };
  }) => {
    return Object.keys(values).map((key) => (
      <TableCell key={key}>{key}</TableCell>
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

  const renderExtraCellSet = (
    values: {
      [key in ExtraParameterKey]: {
        [key in ParameterType]: number;
      };
    },
    type: ParameterType
  ) => {
    const keys = Object.keys(values) as ExtraParameterKey[];

    return keys.map((key, i) => (
      <TableCell key={`${type}:${i}`} sx={{ padding: 0 }}>
        <TextField
          type='number'
          inputProps={{ min: 0 }}
          value={values[key][type]}
          disabled={type === 'self'}
          sx={inputStyle}
          onChange={(e) => onChangeExtraParameter(key, type, e)}
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
              {renderExtraCellSet(extraParams, type)}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};
