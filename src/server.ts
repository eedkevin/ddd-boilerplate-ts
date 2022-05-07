import 'dotenv/config'
import 'reflect-metadata'
import http from 'http'

import { createExpressServer, createApolloServer } from './apis'
import { logger } from './utils'

export async function createServer() {
  const app = createExpressServer('/api/rest')
  await createApolloServer(app, '/api/graphql')
  return http.createServer(app)
}

export async function bootstrap() {
  const httpServer = await createServer()
  const port = Number(process.env.PORT || 3000)
  const host = String(process.env.HOST || '0.0.0.0')
  httpServer.listen({ host, port }, () => {
    logger.info(`Server running on http://${host}:${port}/`)
  })
}

if (require.main == module) {
  bootstrap()
}
