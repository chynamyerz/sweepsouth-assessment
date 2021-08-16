import React, { FC } from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { ProfileDetailRow } from '../ProfileDetailRow';

import { ProfileDetailsProps } from './types';

export const ProfileDetails: FC<ProfileDetailsProps> = ({ profile }) => {
  const {
    id,
    gender,
    email,
    cell,
    phone,
    name: { title, first, last },
    dob: { date: dobDate, age: dobAge },
    location: { country, state, city, street, postcode },
    registered: { date: registeredDate, age: registeredAge },
  } = profile;
  return (
    <Grid container item justifyContent={'flex-start'} direction={'column'}>
      <Box id={id.name}>
        <Typography variant="h6" gutterBottom color={'textSecondary'}>
          Personal info.
        </Typography>
        <ProfileDetailRow label={'Title'} value={`${title}.`} />
        <ProfileDetailRow label={'First name'} value={first} />
        <ProfileDetailRow label={'Last name'} value={last} />
        <ProfileDetailRow
          label={'Date of birth'}
          value={moment(new Date(dobDate)).format('LLLL')}
        />
        <ProfileDetailRow label={'Age'} value={`${dobAge} years old`} />
        <ProfileDetailRow label={'Gender'} value={gender} />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom color={'textSecondary'}>
          Contact info.
        </Typography>
        <ProfileDetailRow label={'Email address'} value={email} />
        <ProfileDetailRow label={'Contact cell'} value={cell} />
        <ProfileDetailRow label={'Contact phone'} value={phone} />
        <ProfileDetailRow
          label={'Physical address'}
          value={`${country}, ${state}, ${city}, ${street.number} ${street.name}, ${postcode}`}
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom color={'textSecondary'}>
          Register info.
        </Typography>
        <ProfileDetailRow
          label={'Member since'}
          value={moment(new Date(registeredDate)).format('LLLL')}
        />
        <ProfileDetailRow
          label={'Age was'}
          value={`${registeredAge} years old`}
        />
      </Box>
    </Grid>
  );
};
