import type { NextPage } from "next";
import Head from "next/head";
import ArchiveListItem from "../components/ArchiveListItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllPosts } from "../src/lib/posts";
import styles from "../styles/Home.module.css";

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
        <meta name="description" content="Some description..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-[50vh] px-4 max-w-xl mx-auto mt-6 mb-16 md:max-w-2xl md:mt-8 md:mb-20">
        <div className="my-2 px-2 overflow-hidden">
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
    revalidate: 3600,
  };
}

export default Home;
