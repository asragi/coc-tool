import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
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
}

export const ParameterMatrixView = ({
  parameters,
  extraParams,
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
      [key: string]: {
        [key in ParameterType]: number;
      };
    },
    type: ParameterType
  ) => {
    return Object.values(values).map((val, i) => (
      <TableCell key={`${type}:${i}`} sx={{ padding: 0 }}>
        <TextField
          type='number'
          inputProps={{ min: 0 }}
          value={val[type]}
          sx={inputStyle}
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
