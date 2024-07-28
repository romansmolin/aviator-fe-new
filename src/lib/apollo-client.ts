import { onError } from '@apollo/client/link/error';
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${STRAPI_URL}/graphql`,
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


