import { GraphQLResponse } from 'apollo-server-types'
import { Response, GraphResponse } from '../@types'
import { SystemCode } from '../constants'

export function genRespBody(code: number, data = {}): Response {
  const body: Response = {
    code: code,
    data: data,
  }
  return body
}

export function genRespBodyGraph(res: GraphQLResponse): GraphResponse {
  const code = res.errors ? SystemCode.Err : SystemCode.OK
  const body: GraphResponse = {
    ...res,
    code,
  }
  return body
}
