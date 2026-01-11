import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Lien vers l’API GraphQL (backend)
const httpLink = createHttpLink({
  uri: "/graphql", 
});

// Création du client Apollo
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
