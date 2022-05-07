import { GraphQLResponse } from 'apollo-server-types'

export type Response = {
  code: number
  data: any
}

export type GraphResponse = GraphQLResponse & { code: number }
