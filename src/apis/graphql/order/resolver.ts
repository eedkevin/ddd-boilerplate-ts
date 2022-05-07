import { Resolver, Arg, Query } from 'type-graphql'
import { OrderType } from './typedef'
import Domains from '../../../domains'

@Resolver(OrderType)
export class OrderResolver {
  @Query(() => OrderType)
  async getOrder(@Arg('id') id: number) {
    return await Domains().Order().getOrder(id)
  }
}
