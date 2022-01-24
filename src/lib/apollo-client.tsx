import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://18.132.52.127/graphql',
  cache: new InMemoryCache(),
});

export default client;
