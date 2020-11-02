import React from 'react'
import { makeRemoteHeroesDetail } from '@/main/factories/usecases/hero-detail'
import { useParams } from 'react-router-dom'
import  HeroDetail  from '@/presentation/pages/hero-detail/hero-detail'

interface ParamTypes {
  id: string;
}
export const makeHeroDetail: React.FC = () => {
  const { id } = useParams<ParamTypes>()
  return (  
    <HeroDetail
      heroDataResult={makeRemoteHeroesDetail(id)}
    />
  )
}