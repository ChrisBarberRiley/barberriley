import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
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

      <div className='px-4 max-w-xl mx-auto mt-6 mb-16 md:max-w-2xl md:mt-8 md:mb-20'>
        <div className='p-4 prose'>
          <h1 className='text-5xl'>{title}</h1>
          <div
            className='mt-3'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>

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

  if (!data.postBy) {
    return {
      notFound: true,
    };
  }

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
