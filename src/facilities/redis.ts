import { createClient, createCluster, RedisClientType, RedisClusterType } from 'redis'
import { config } from '../configs'

let redis: RedisClientType | RedisClusterType | undefined = undefined

export async function getRedisClient(): Promise<RedisClientType> {
  const node = config.redis.connUrl.startsWith('redis://') ? config.redis.connUrl : `redis://${config.redis.connUrl}`
  redis = createClient({
    url: node,
  })
  await redis.connect()
  return redis
}

export async function getRedisClusterClient(): Promise<RedisClusterType> {
  const connUrls = config.redis.cluster.connUrls.split(',')
  const nodes = connUrls.map((url) => {
    return url.startsWith('redis://') ? { url: url } : { url: `redis://${url}` }
  })
  redis = createCluster({
    rootNodes: nodes,
  })
  await redis.connect()
  return redis
}
