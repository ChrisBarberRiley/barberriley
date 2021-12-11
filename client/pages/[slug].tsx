import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

interface Posts {
  posts: {
    edges: Array<{
      node: { title: string; slug: string };
    }>;
  };
}

const Post: NextPage<Posts> = ({ posts }) => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(posts);
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Slug</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Post: {slug}</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Post;
