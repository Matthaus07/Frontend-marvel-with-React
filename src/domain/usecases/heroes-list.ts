export interface LoadHeroesList {
  loadAll: () => Promise<LoadHeroesList.Model[]>
}

export namespace LoadHeroesList {
  export interface Model  {
    id: string
    name: string
    series: any
    events: any
    thumbnail: any
  }
}
