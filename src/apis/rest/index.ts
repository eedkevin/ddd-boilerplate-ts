import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { v4 as uuidv4 } from 'uuid'

import router from './router'

export function createExpressServer(path: string, middlewares?: [express.RequestHandler]): express.Application {
  const app = express()
  applyMiddleware(app, path, middlewares)
  return app
}

export function applyMiddleware(server: express.Application, path: string, middlewares?: [express.RequestHandler]) {
  if (middlewares) {
    for (const middleware of middlewares) {
      server.use(middleware)
    }
  }
  server.use(path, cors())
  server.use(path, helmet())
  server.use(path, express.json())
  server.use(path, express.urlencoded({ extended: true }))
  server.use(path, morgan('combined'), router)

  server.use(path, (req, res, next) => {
    req.header['reqId'] = uuidv4()
    next()
  })

  server.use(`${path}/healthz`, (req, res) => {
    res.status(200).send('ok')
  })
}
