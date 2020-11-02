import { makeRemotHeroesList } from '@/main/factories/usecases/main-heroes'
import  MainHeroes  from '@/presentation/pages/main-heroes/main-heroes'
import React from 'react'

export const makeHeroList: React.FC = () => {
  return (
    <MainHeroes
    heroeslist={makeRemotHeroesList()}
    />
  )
}