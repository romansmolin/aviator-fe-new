import { onError } from '@apollo/client/link/error';
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.GRAPHQL_API_URL || 'http://localhost:1337/graphql',
            // uri: 'http://localhost:1337/graphql',
        }),
    });
});

export const getServerQuery = async (schema: any, variables: any) => {
    const query = schema
    const { data } = await getClient().query({
		query,
		variables,
		fetchPolicy: "no-cache",
	});

    return data
}


