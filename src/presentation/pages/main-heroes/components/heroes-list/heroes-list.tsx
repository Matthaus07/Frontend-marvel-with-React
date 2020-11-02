import React from 'react'
import { LoadHeroesList } from '@/domain/usecases'
import HeroItem from '../hero-item/hero-item'
import Styles from './heroes-list-styles.scss'
import empty from '../../../../../../public/empty.svg'
interface Props {
  heroes: LoadHeroesList.Model[]
}

const HeroesList: React.FC<Props> = ({ heroes }: Props) => {
  return (
    <>
      <section className={Styles.list}>
        <ul className={Styles.nameFields}>
          <li className={Styles.fieldChars}>Personagem</li>
          <li className={Styles.fieldSeries}>Series</li>
          <li className={Styles.fieldEvets}>Eventos</li>

        </ul>
        {heroes.length
          ? heroes.map((hero,index) => {
            return <HeroItem key={index} hero={hero} />
          }

          )
          : <>
            <div className={Styles.contentMessage}>

              <img className={Styles.customizeImageEmpty} src={empty}/>
              <div>Não há nada na caixa... Resultado não encontrado :/</div>
            </div>
          </>
        }

      </section>
    </>

  )
}

export default HeroesList
