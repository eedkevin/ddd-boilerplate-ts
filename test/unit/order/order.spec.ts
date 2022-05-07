import 'dotenv/config'
import { expect } from 'chai'
import Domains from '../../../src/domains'

describe('Order Domain', () => {
  describe('#cloneOrder', () => {
    it('should return without any exception', async () => {
      expect(async () => {
        await Domains().Order().cloneOrder()
      }).to.not.throw(Error)
    })
  })
})
