import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import { ProfileImageProps } from './types';

export const ProfileImage: FC<ProfileImageProps> = ({ imgUrl }) => {
  return (
    <Grid container item justifyContent={'center'}>
      <Avatar
        alt={'Profile image'}
        src={imgUrl}
        style={{ height: 200, width: 200 }}
      />
    </Grid>
  );
};
