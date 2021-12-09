import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
                <TableCell key={`${type}:${i}`}>{val[type]}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};
