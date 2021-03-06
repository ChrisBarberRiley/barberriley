import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
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
        <Hero title='About' stanfirst='Some content' />
      </main>

      <Footer />
    </div>
  );
};

export default About;
