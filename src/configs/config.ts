export interface IEnv {
  env: string
  appId: string
}

export interface IRedisClusterConfig {
  connUrls: string
}

export interface IRedisConfig {
  connUrl: string
  noReadyCheck: boolean
  cluster: IRedisClusterConfig
}

export interface IConfig {
  env: IEnv
  redis: IRedisConfig
}

export const config: IConfig = {
  env: {
    env: process.env.ENV,
    appId: process.env.APP_ID,
  },
  redis: {
    connUrl: process.env.REDIS_CONNECTION_URL,
    noReadyCheck: Boolean(process.env.REDIS_NO_READY_CHECK) || true,
    cluster: {
      connUrls: process.env.REDIS_CLUSTER_CONNECTION_URLS,
    },
  },
}
