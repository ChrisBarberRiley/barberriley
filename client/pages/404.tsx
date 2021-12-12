import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const notFound = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>404 not found - BarberRiley.com</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sorry, the page you&apos;re after can&apos;t be found
        </h1>
        <div className={styles.description}>
          Head back <Link href='/'>home &gt;&gt;</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default notFound;
