import { Box, Container, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Current from '../components/Widgets/Current';
import { getAllPosts, getPostBySlug } from '../src/lib/posts';
import styles from '../styles/Home.module.css';

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
}

const Post: NextPage<Post> = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>{title} - BarberRiley.com</title>
        <meta name='description' content='Some description...' />
      </Head>

      <Container className={styles.main} maxWidth='lg'>
        <Grid container spacing={2} xs={12}>
          <Grid item md={9}>
            <Box p={3}>
              <h1 className={styles.title}>{title}</h1>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box sx={{ bgcolor: 'primary.main' }}>
              <Current />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await getAllPosts();
  return {
    paths:
      data.posts.edges.map(
        ({ node }: { node: { slug: string } }) => `/${node.slug}`,
      ) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data } = await getPostBySlug(params.slug);
  const { title, slug, excerpt, content } = data.postBy;
  return {
    props: {
      title: title || null,
      slug: slug || null,
      excerpt: excerpt || null,
      content: content || null,
    },
  };
}

export default Post;
