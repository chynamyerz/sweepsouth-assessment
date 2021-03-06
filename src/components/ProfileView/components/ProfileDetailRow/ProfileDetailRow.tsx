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
    <Grid container item sm={12}>
      <Grid item className={classes.label} sm={6}>
        {label}:
      </Grid>
      <Grid item sm={6}>
        {value}
      </Grid>
    </Grid>
  );
};
