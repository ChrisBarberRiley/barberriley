import { gql } from '@apollo/client';

export const QUERY_GET_ALL_POSTS = gql`
  query PostsQuery {
    posts {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export const QUERY_GET_POST_BY_SLUG = gql`
  query PostQuery($slug: String) {
    postBy(slug: $slug) {
      id
      title
      excerpt
      content
    }
  }
`;
