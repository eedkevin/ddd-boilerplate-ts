import { ObjectType, Field } from 'type-graphql'
import { Order } from '../../../@types/order'

@ObjectType()
export class OrderType implements Order {
  @Field()
  id: number

  @Field()
  uuid: number
}
