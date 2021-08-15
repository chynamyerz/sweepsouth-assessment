import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import { ProfileImageProps } from './types';

import { useStyles } from './styles';

export const ProfileImage: FC<ProfileImageProps> = ({ imgUrl, className }) => {
  const classes = useStyles();
  return (
    <Grid container item justifyContent={'center'}>
      <Avatar
        alt={'Profile image'}
        src={imgUrl}
        className={`${classes.profileImage} ${className ?? ''}`}
      />
    </Grid>
  );
};
