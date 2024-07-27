"use client";

import { ApolloProvider as Provider } from '@apollo/client';
import client from '@/lib/apollo-client';

//@ts-ignore
export function ApolloProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}