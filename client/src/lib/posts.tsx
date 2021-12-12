import { QUERY_GET_ALL_POSTS, QUERY_GET_POST_BY_SLUG } from '../data/posts';
import client from './apollo-client';
/**
 * Get all posts
 * @returns Object
 */

export async function getAllPosts() {
  const data = await client.query({
    query: QUERY_GET_ALL_POSTS,
  });
  return data;
}
/**
 * Get post by slug
 * @returns Object
 */

export async function getPostBySlug(slug: string) {
  const post = await client.query({
    query: QUERY_GET_POST_BY_SLUG,
    variables: {
      slug,
    },
  });
  return post;
}
