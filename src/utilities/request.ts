import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({ cache: new InMemoryCache(), link: createHttpLink({ uri: 'https://jsonplaceholder.ir/graphql' }) });
export default client;