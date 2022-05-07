import { IOrderService, OrderService } from './order.svc'
import { IAccountService, AccountService } from './account.svc'

export interface IServices {
  Account: () => IAccountService
  Order: () => IOrderService
}

export function Services(): IServices {
  const services: IServices = {
    Account: () => AccountService(),
    Order: () => OrderService(),
  }
  return services
}

export default Services
export * from './account.svc'
export * from './order.svc'
