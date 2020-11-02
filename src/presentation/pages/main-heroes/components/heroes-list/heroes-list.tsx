import React, { useState } from 'react'
import { LoadHeroesList } from '@/domain/usecases'
import HeroItem from '../hero-item/hero-item'
import Styles from './heroes-list-styles.scss'
import SurveyItemEmpty from '@/presentation/components/list-item-empty/list-Item-Empty'

interface Props  {
  heroes: LoadHeroesList.Model[]
}



const HeroesList: React.FC<Props> = ({heroes}) =>{

  return (
    <>
        <section className={Styles.list}>
          <ul className={Styles.nameFields}>
          <li>Personagem</li>
          <li>Series</li>
          <li>Eventos</li>

          </ul>
          {heroes.length? 
           heroes.map((hero,index) => {

              return <HeroItem key={index} hero={hero} />
            }
           
          )
          : <SurveyItemEmpty />
          }
       

        </section>
  </>
  
    )
}

export default HeroesList