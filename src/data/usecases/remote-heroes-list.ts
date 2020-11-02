  
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { LoadHeroesList } from '@/domain/usecases'

export class RemoteLoadHeroesList implements LoadHeroesList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadHeroesList.Model[]>
  ) {}

  async loadAll (): Promise<LoadHeroesList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteHeroes = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteHeroes.map(remoteHero => Object.assign(remoteHero))
      case HttpStatusCode.noContent: return []
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadHeroesList {
  export type Model = {
    id: string
    name: string
    series: any
    events: any
  }
}