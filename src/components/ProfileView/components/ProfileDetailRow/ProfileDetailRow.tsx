import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { ProfileDetailRowProps } from './types';

import { useStyles } from './styles';

export const ProfileDetailRow: FC<ProfileDetailRowProps> = ({
  label,
  value,
}) => {
  const classes = useStyles();

  return (
    <Grid container item direction={'row'}>
      <Box className={classes.label}>{label}:</Box>
      <Box className={classes.value}>{value}</Box>
    </Grid>
  );
};
