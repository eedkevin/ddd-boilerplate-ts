import { Order } from '../@types'

export interface IOrderService {
  getOrder(id: number): Promise<Order>
  cloneOrder(): Promise<void>
}

export function OrderService(): IOrderService {
  const orderService: IOrderService = {
    async getOrder(id: number): Promise<Order> {
      const order: Order = {
        id: id,
        uuid: 321321,
      }
      return new Promise((resolve) => resolve(order))
    },

    async cloneOrder() {
      return new Promise((resolve) => resolve())
    },
  }
  return orderService
}
