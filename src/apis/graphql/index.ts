import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { buildSchema } from 'type-graphql'

import { OrderResolver } from './order'
import { genRespBodyGraph } from '../../utils'

async function createApolloServer(app: express.Application, path: string): Promise<ApolloServer> {
  const schema = await buildSchema({ resolvers: [OrderResolver] })

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    formatResponse: (res, query) => {
      return genRespBodyGraph(res)
    },
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path })
  return apolloServer
}

export { createApolloServer }
