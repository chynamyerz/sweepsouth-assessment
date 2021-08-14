import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import { ProfileSummaryProps } from './types';

export const ProfileSummary: FC<ProfileSummaryProps> = ({ id, name }) => {
  return <Grid>Profile summary goes here</Grid>;
};
