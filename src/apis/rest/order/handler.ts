import express from 'express'
import { StatusCodes } from 'http-status-codes'

import { SystemCode } from '../../../constants'
import { genRespBody } from '../../../utils'
import Domains from '../../../domains'

export const cloneOrder: express.RequestHandler = async function (req, res) {
  await Domains().Order().cloneOrder()
  return res.status(StatusCodes.OK).json(genRespBody(SystemCode.OK))
}
