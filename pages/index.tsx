import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Profile } from '../src/components';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Profiles</title>
        <meta
          name="A Sweep south assessment"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item xs={12}>
        <Box mx={25}>
          <Profile
            id={'p1'}
            name={'profile 1'}
            imgUrl={'https://some-image-url'}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Home;
