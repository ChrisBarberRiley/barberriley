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
  return (
    <div className={styles.container}>
      <Head>
        <title>BarberRiley.com - The Developers Blog</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='lg:container mx-auto flex flex-wrap overflow-hidden'>
        <div className='my-2 px-2 w-5/6 overflow-hidden'>
          {posts.edges.map(({ node }) => (
            <ArchiveListItem
              key={node.slug}
              slug={node.slug}
              title={node.title}
            />
          ))}
        </div>
      </div>

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
