import 'dotenv/config'
import request from 'supertest'
import { expect } from 'chai'
import StatusCodes from 'http-status-codes'

import fixtures from './order.flow.fixture.json'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || '3000'
let api: request.SuperTest<request.Test>

before(() => {
  api = request(`${HOST}:${PORT}`)
})

describe('Order Flows #1 login->clone', () => {
  let userId
  let orderId
  before(() => {
    userId = fixtures[0].input.userId
    orderId = fixtures[0].input.orderId
  })

  let loginEndpoint = '/api/rest/account/login'
  describe(`POST ${loginEndpoint}`, () => {
    let resp
    it('should return http status code 200', async () => {
      resp = await api.post(loginEndpoint).send({ id: userId })
      expect(resp.statusCode).to.eql(StatusCodes.OK)
    })
    it('should return a valid Response JSON obejct', () => {
      const { body } = resp
      expect(body).to.not.eql({})
      expect(body).to.have.property('code')
      expect(body).to.have.property('data')
    })
    it('should wrap an valid Account in Response body', () => {
      const { data } = resp.body
      expect(data).to.have.property('id')
      expect(data).to.have.property('uuid')
      expect(data).to.have.property('name')
    })
  })

  let cloneEndpiont = '/api/rest/order/clone'
  describe(`POST ${cloneEndpiont}`, async () => {
    let resp
    it('should return http status code 200', async () => {
      resp = await api.post(cloneEndpiont).send({ id: orderId })
      expect(resp.statusCode).to.eql(StatusCodes.OK)
    })
    it('should return a valid Response JSON object', () => {
      const { body } = resp
      expect(body).to.not.eql({})
      expect(body).to.have.property('code')
      expect(body).to.have.property('data')
    })
  })
})
