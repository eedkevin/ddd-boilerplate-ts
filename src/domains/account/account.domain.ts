import { Account, Auth } from '../../@types'
import Services from '../../services'

export interface IAccountDomain {
  auth(): Promise<Auth>
  login(id: number): Promise<Account>
}

export function Account(): IAccountDomain {
  const account: IAccountDomain = {
    async auth(): Promise<Auth> {
      return Services().Account().auth()
    },

    async login(id: number): Promise<Account> {
      return Services().Account().login(id)
    },
  }
  return account
}
