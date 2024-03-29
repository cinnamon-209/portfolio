import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

// export default client;
const httpLink = new HttpLink({ uri: process.env.GRAPHQL_URL });

export const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = process.env.TOKEN;

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default client;