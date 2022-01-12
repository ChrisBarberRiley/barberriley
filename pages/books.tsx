import { Box, Container, Grid, Stack } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Books: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Books - BarberRiley.com</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.main}>
        <Stack direction='row' justifyContent='space-between'>
          <Grid item md={9} xs={12} container spacing={2}>
            <Box>
              <h1 className={styles.title}>Books</h1>
              <div className={styles.description}>
                <p>
                  I am currently reading Team Topologies. I will update here
                  with a comprehensive list in due course.
                </p>
              </div>
            </Box>
          </Grid>
        </Stack>
      </Container>

      <Footer />
    </div>
  );
};

export default Books;
