import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
        <title>BarberRiley.com - Developers Blog</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        {posts.edges.map(({ node }) => (
          <div key={node.title} className={styles.grid}>
            <a href='https://nextjs.org/docs' className={styles.card}>
              <h2>{node.title} &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
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
