  
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteDataHeroResultModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HeroDataResult } from '@/domain/usecases'

export class RemoteDataHeroResult implements HeroDataResult {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteDataHeroResult.Model[]>
  ) {}

  async load (): Promise<HeroDataResult.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteDataResult = httpResponse.body 
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return Object.assign([], remoteDataResult)
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteDataHeroResult {
  export type Model = RemoteDataHeroResultModel
}
