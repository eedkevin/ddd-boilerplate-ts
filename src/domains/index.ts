import { IAccountDomain, Account } from './account'
import { IOrderDomain, Order } from './order'

export interface IDomains {
  Account: () => IAccountDomain
  Order: () => IOrderDomain
}

export function Domains(): IDomains {
  const domains: IDomains = {
    Account: () => Account(),
    Order: () => Order(),
  }
  return domains
}

export default Domains
export * from './account'
export * from './order'
