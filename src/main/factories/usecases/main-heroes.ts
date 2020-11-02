import { makeApiUrl, makeHttpClient } from '@/main/factories/http'
import { LoadHeroesList } from '@/domain/usecases'
import { RemoteLoadHeroesList } from '@/data/usecases/remote-heroes-list'
export const makeRemotHeroesList = (): LoadHeroesList => {
 
  return new RemoteLoadHeroesList(makeApiUrl(`/characters?`),makeHttpClient() )
}