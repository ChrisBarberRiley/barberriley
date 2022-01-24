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
      <div className='px-4 max-w-xl mx-auto mt-6 mb-16 md:max-w-2xl md:mt-8 md:mb-20'>
        <div className='p-4 prose'>
          <h1>Books</h1>
          <p>
            I am currently reading Team Topologies. I will update here with a
            comprehensive list in due course.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Books;
