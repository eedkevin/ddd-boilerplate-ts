import express from 'express'
import Domains from '../../../domains'

export async function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  await Domains().Account().auth()
  return next()
}
