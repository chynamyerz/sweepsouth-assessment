import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import { ProfileImageProps } from './types';

export const ProfileImage: FC<ProfileImageProps> = ({ imgUrl }) => {
  return <Grid>Profile image goes here</Grid>;
};
