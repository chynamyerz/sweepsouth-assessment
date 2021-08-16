import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';

import { ProfileImage, ProfileSummary } from '../common';

import { IProfile } from '../../../lib/state/profileContext/types';
import { ProfileProps } from './types';
import { useStyles } from './styles';

export const Profile: FC<ProfileProps> = ({ profile }) => {
  const {
    name: { title, first, last },
    picture: { large },
    location: {
      country,
      state,
      city,
      street: { number: streetNumber, name: streetName },
      postcode,
    },
  } = profile as IProfile;
  const classes = useStyles();

  return (
    <Grid container item justifyContent={'center'}>
      <Card className={classes.pointer}>
        <CardContent>
          <Box>
            <ProfileImage imgUrl={large} />
          </Box>
          <hr />
          <Box>
            <ProfileSummary
              name={`${title} ${first} ${last}`}
              city={`${country}, ${state}, ${city}, ${streetNumber} ${streetName}, ${postcode}`}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
