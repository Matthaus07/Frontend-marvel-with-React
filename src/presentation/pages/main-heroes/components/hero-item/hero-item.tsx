import { LoadHeroesList } from '@/domain/usecases'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './hero-item-styles.scss'

interface Props {
  hero: LoadHeroesList.Model
}

const HeroItem: React.FC<Props> = ({ hero }: Props) => {
  return (
    <Link data-testid="link" to={`/hero-detail/${hero.id}`}>
      <div className={Styles.backgroundCard}>
        <div className={Styles.thumbnailContent}>
          <img className={Styles.thumbnailBackground} src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt=""/>
          <p>{hero.name}</p>
        </div>
        <ul>
          {hero.series.items.length === 0 ? <li>Sem Séries</li>
            : hero.series.items.slice(0,3).map((i,index) => <li key={index}>{i.name}</li>)}
        </ul>
        <ul>
          {hero.events.items.length === 0 ? <li>Sem Eventos</li>
            : hero.events.items.slice(0,3).map((i,index) => <li key={index}>{i.name}</li>)}
        </ul>
      </div>
    </Link>

  )
}

export default HeroItem
