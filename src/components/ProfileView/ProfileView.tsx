import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import { ProfileImage } from '../common';
import { ProfileDetails } from './components';

import { ProfileViewProps } from './types';

import { useStyles } from './styles';

export const ProfileView: FC<ProfileViewProps> = ({
  imgUrl,
  name,
  id,
  city,
}) => {
  const classes = useStyles();

  return (
    <Grid container item justifyContent={'center'}>
      <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Card>
          <CardContent>
            <Box>
              <ProfileImage
                imgUrl={imgUrl}
                className={classes.profileViewImage}
              />
            </Box>
            <hr />
            <ProfileDetails id={id} name={name} city={city} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
    </Grid>
  );
};
