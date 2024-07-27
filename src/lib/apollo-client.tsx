// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

const httpLink = new HttpLink({
    uri: `${STRAPI_URL}/graphql`,
    credentials: 'same-origin', 
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});


const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;
