import { ApolloClient, InMemoryCache } from "@apollo/client";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/graphql"
  }${path}`;
}

const client = new ApolloClient({
    uri: getStrapiURL(),
    cache: new InMemoryCache(),
});

export default client;