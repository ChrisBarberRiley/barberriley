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
