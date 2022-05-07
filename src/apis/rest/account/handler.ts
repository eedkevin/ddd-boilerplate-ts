import express from 'express'
import { StatusCodes } from 'http-status-codes'

import { SystemCode } from '../../../constants'
import { genRespBody } from '../../../utils'
import Domains from '../../../domains'

export const login: express.RequestHandler = async function (req, res) {
  const { id } = req.body
  const acc = await Domains().Account().login(Number(id))
  return res.status(StatusCodes.OK).json(genRespBody(SystemCode.OK, acc))
}
