import { QUERY_GET_ALL_POSTS } from '../data/posts';
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
