import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
        <title>BarberRiley.com - Developers Blog</title>
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

export default Post;
