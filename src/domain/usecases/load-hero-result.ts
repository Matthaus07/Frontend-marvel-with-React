export interface  HeroDataResult {
    load: () => Promise<HeroDataResult.Model[]>
  }
  
export namespace HeroDataResult {
  export type Model = {
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
    series?: {
      available: string,
      items: Array<{
        name: string
      }>
    }
  }
}