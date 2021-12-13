import { Box, Grid, InputAdornment, TextField } from '@mui/material';

export interface ProfileInputViewProps {
  nameLabel: string;
  jobLabel: string;
  ageLabel: string;
  genderLabel: string;
  heightLabel: string;
  weightLabel: string;
  fromLabel: string;
}

export const ProfileInputView = ({
  nameLabel,
  jobLabel,
  ageLabel,
  genderLabel,
  heightLabel,
  weightLabel,
  fromLabel,
}: ProfileInputViewProps) => {
  const style = {
    width: '100%',
  };

  return (
    <Grid container spacing={0.5} columns={5}>
      <Grid item xs={2}>
        <TextField label={nameLabel} sx={style} />
      </Grid>
      <Grid item xs={2}>
        <TextField label={jobLabel} sx={style} />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1}>
        <TextField
          label={ageLabel}
          sx={style}
          type='number'
          inputProps={{ min: 0 }}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField label={genderLabel} sx={style} />
      </Grid>
      <Grid item xs={1}>
        <TextField label={fromLabel} sx={style} />
      </Grid>
      <Grid item xs={1}>
        <TextField
          label={heightLabel}
          sx={style}
          type='number'
          inputProps={{ min: 0 }}
          InputProps={{
            endAdornment: <InputAdornment position='end'>cm</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          label={weightLabel}
          sx={style}
          type='number'
          inputProps={{ min: 0 }}
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Grid>
    </Grid>
  );
};
