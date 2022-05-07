import { Account, Auth } from '../@types'

export interface IAccountService {
  auth(): Promise<Auth>
  login(id: number): Promise<Account>
}

export function AccountService(): IAccountService {
  const accountService: IAccountService = {
    async auth(): Promise<Auth> {
      const auth: Auth = {
        uuid: 321321,
        token: 'dfaf9023fjoiad',
        refreshToken: '9vafdsno23ce',
        expiry: +new Date() / 1000,
      }
      return new Promise((resolve) => resolve(auth))
    },

    async login(id: number): Promise<Account> {
      const acc: Account = {
        id: id,
        uuid: 321321,
        name: 'fakeuser',
      }
      return new Promise((resolve) => resolve(acc))
    },
  }
  return accountService
}
