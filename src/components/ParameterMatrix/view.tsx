import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { ParameterKey6, ParameterType, ParameterTypes } from '../../types';

type ParameterKey = ParameterKey6;

type ParameterSet = {
  [key in ParameterKey]: { [key in ParameterType]: number };
};

export interface ParameterMatrixViewProps {
  parameters: ParameterSet;
}

export const ParameterMatrixView = ({
  parameters,
}: ParameterMatrixViewProps) => {
  const inputStyle = { margin: 0 };

  return (
    <TableContainer component='table'>
      <TableHead>
        <TableRow>
          <TableCell />
          {Object.keys(parameters).map((key) => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {ParameterTypes.map((type: ParameterType) => {
          return (
            <TableRow key={type}>
              <TableCell>{type}</TableCell>
              {Object.values(parameters).map((val, i) => (
                <TableCell key={`${type}:${i}`} sx={{ padding: 0 }}>
                  <TextField
                    type='number'
                    inputProps={{ min: 0 }}
                    value={val[type]}
                    sx={inputStyle}
                  />
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};
