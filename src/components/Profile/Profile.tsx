import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';

import { ProfileImage, ProfileSummary } from '../common';

import { ProfileProps } from './types';

export const Profile: FC<ProfileProps> = ({ imgUrl, name, city }) => {
  return (
    <Grid container item justifyContent={'center'}>
      <Card>
        <CardContent>
          <Box>
            <ProfileImage imgUrl={imgUrl} />
          </Box>
          <hr />
          <Box>
            <ProfileSummary name={name} city={city} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
