import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import ArchiveListItem from '../components/ArchiveListItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getAllPosts } from '../src/lib/posts';
import styles from '../styles/Home.module.css';

interface Posts {
  posts: {
    edges: Array<{
      node: { title: string; slug: string };
    }>;
  };
}

const Home: NextPage<Posts> = ({ posts }) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>BarberRiley.com - The Developers Blog</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Stack direction='row' justifyContent='space-between'>
          <Grid item md={2} xs={12}>
            <Grid item>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    p: 2,
                  }}
                >
                  <Typography variant='h5' gutterBottom component='div'>
                    Hi, I'm Chris.
                  </Typography>
                  <Typography variant='body1' gutterBottom component='div'>
                    Currently Head of Engineering, avid developer and my passion
                    is in developing both people and products.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9} xs={12} spacing={2}>
            {posts.edges.map(({ node }) => (
              <ArchiveListItem
                key={node.slug}
                slug={node.slug}
                title={node.title}
              />
            ))}
          </Grid>
        </Stack>
      </Container>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await getAllPosts();

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default Home;
