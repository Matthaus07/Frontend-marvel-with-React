import { FetchHttpAdapter } from '@/infra/http/http-client'

export const makeHttpClient = (): FetchHttpAdapter => {
  return new FetchHttpAdapter()
}
