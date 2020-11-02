export type RemoteDataHeroResultModel = {
  id?: number
  name?: string
  thumbnail?: {
    path: string,
    extension: string
  }
  description:string
  comics?: {
    available: string,
    collectionURI:string,
    items: Array<{
      name: string,
      resourceURI:string
    }>
  }
  stories?: {
    available: string,
    items: Array<{
      name: string
    }>
  }
}