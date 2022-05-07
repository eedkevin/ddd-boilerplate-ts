import { Order } from '../../@types/order'
import Services from '../../services'

export interface IOrderDomain {
  getOrder(id: number): Promise<Order>
  cloneOrder(): Promise<void>
}

export function Order(): IOrderDomain {
  const order: IOrderDomain = {
    async getOrder(id: number): Promise<Order> {
      return Services().Order().getOrder(id)
    },

    async cloneOrder() {
      return Services().Order().cloneOrder()
    },
  }
  return order
}
