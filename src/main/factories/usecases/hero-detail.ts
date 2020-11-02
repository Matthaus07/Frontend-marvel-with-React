import { makeApiUrl, makeHttpClient } from '@/main/factories/http'
import { HeroDataResult } from '@/domain/usecases'
import { RemoteDataHeroResult } from '@/data/usecases/result-data-hero'
export const makeRemoteHeroesDetail = (id: string): HeroDataResult => {
  return new RemoteDataHeroResult(makeApiUrl(`/characters?id=${id}`),makeHttpClient() )
}