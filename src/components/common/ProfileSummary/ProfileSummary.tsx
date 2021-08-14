import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { LocationOnOutlined } from '@material-ui/icons';

import { ProfileSummaryProps } from './types';

export const ProfileSummary: FC<ProfileSummaryProps> = ({ name, city }) => {
  return (
    <Grid container item justifyContent={'flex-start'} direction={'column'}>
      <Box style={{ marginBottom: 10, fontWeight: 'bold' }}>{name}</Box>
      <Box>
        <LocationOnOutlined
          style={{
            position: 'relative',
            top: 5,
            left: -5,
            fontWeight: 'lighter',
          }}
        />
        {city}
      </Box>
    </Grid>
  );
};
