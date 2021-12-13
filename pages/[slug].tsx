import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getAllPosts, getPostBySlug } from '../src/lib/posts';
import styles from '../styles/Home.module.css';

interface Post {
  postBy: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
  };
}

const Post: NextPage<Post> = ({ postBy: { title, content } }) => {
  console.log(title);
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>{title} - BarberRiley.com</title>
        <meta name='description' content='Some description...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </main>
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
  return { props: data };
}

export default Post;
