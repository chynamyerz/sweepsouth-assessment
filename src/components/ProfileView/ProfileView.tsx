import React, { FC, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import { ArrowBack } from '@material-ui/icons';
import { useRouter } from 'next/router';

import { ProfileImage } from '../common';
import { ProfileDetails } from './components';

import { useStyles } from './styles';
import { useProfile } from '../../../lib/state';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/helper';
import { IProfile } from '../../../lib/state/profileContext/types';

export const ProfileView: FC = () => {
  const { profile, profiles, setProfile } = useProfile();
  const {
    query: { profileId },
    push,
  } = useRouter();
  const [currentProfile, setCurrentProfile] = useState<IProfile | undefined>(
    profile ?? getLocalStorageItem('profile')
  );
  const [currentProfiles, setCurrentProfiles] = useState<IProfile[]>(
    profiles.length < 1 ? getLocalStorageItem('profiles')?.profiles : []
  );

  useEffect(() => {
    if (
      currentProfile?.id?.name &&
      profileId &&
      currentProfile.id.name !== profileId
    ) {
      const newCurentprofile = currentProfiles.find(
        (cp) => cp.id.name === profileId
      );
      setLocalStorageItem('profile', newCurentprofile);
      setCurrentProfile(newCurentprofile);

      push(`/profile/${profileId}`);
    }
  }, [profileId]);

  if (!currentProfile) {
    return <p>Loading...</p>;
  }

  const imageUrl = currentProfile?.picture?.large;
  const classes = useStyles();

  return (
    <Grid container item justifyContent={'center'}>
      <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Card>
          <CardHeader
            title={
              <Grid container>
                <Box marginTop={2}>
                  <ArrowBack
                    onClick={() => push('/')}
                    className={classes.pointer}
                  />
                </Box>
              </Grid>
            }
          />
          <CardContent>
            <Box>
              <ProfileImage
                imgUrl={imageUrl ?? ''}
                className={classes.profileViewImage}
              />
            </Box>
            <hr />
            <ProfileDetails profile={currentProfile} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
    </Grid>
  );
};
