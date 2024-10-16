'use client';

import { ApolloClient, ApolloProvider as ApolloClientProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

interface ApolloProviderProps {
    children: ReactNode;
    accessToken?: string;
}

export default function ApolloProviderBase({ children }: ApolloProviderProps) {

    const link = createHttpLink({
        uri: 'http://localhost:4001/graphql',
        credentials: 'omit'
    });

    const client = new ApolloClient({
        link,
        cache: new InMemoryCache(),
    });

    return <ApolloClientProvider client={client}>{children}</ApolloClientProvider>;
}
