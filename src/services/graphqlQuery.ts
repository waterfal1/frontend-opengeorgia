import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export async function query(strQuery: string) {
  const client = new ApolloClient({
    uri: 'https://backend.opengeorgia.net/myendpoint',
    cache: new InMemoryCache(),
  });
  return client
    .query({
      query: gql(strQuery),
    });
}
