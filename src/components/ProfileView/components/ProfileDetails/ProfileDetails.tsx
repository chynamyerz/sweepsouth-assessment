import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import { ProfileDetailRow } from '../ProfileDetailRow';

import { ProfileDetailsProps } from './types';

export const ProfileDetails: FC<ProfileDetailsProps> = ({ name, city }) => {
  return (
    <Grid container item justifyContent={'flex-start'} direction={'column'}>
      <ProfileDetailRow label={'Full name'} value={name} />
    </Grid>
  );
};
