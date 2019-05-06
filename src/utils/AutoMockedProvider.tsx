import React, { ReactNode } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  IMocks
} from "graphql-tools";
import { printSchema, buildClientSchema } from "graphql/utilities";
import introspectionResult from "../../schema.json";

const AutoMockedProvider: React.FunctionComponent<{
  children: ReactNode;
  mockResolvers?: IMocks;
}> = ({ children, mockResolvers }) => {
  // 1) Convert JSON schema into Schema Definition Language
  const schemaSDL = printSchema(
    buildClientSchema({ __schema: introspectionResult.__schema as any })
  );

  // 2) Make schema "executable"
  const schema = makeExecutableSchema({
    typeDefs: schemaSDL,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });

  // 3) Apply mock resolvers to executable schema
  addMockFunctionsToSchema({ schema, mocks: mockResolvers });

  // 4) Define ApolloClient (client variable used below)
  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AutoMockedProvider;
