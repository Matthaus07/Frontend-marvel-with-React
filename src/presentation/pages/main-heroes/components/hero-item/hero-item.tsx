import { LoadHeroesList } from '@/domain/usecases'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './hero-item-styles.scss'

interface Props {
  hero: LoadHeroesList.Model
}

const HeroItem: React.FC<Props> = ({ hero }: Props) => {
  return (
    <div className={Styles.backgroundCard}>
      <Link className={Styles.thumbnailContent} data-testid="link" to={`/hero-detail/${hero.id}`}>
        <img className={Styles.thumbnailBackground} src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt=""/>
        <p>{hero.name}</p>
      </Link>
      <ul>
        <li>{hero.name}</li>
      </ul>
      <ul>
        <li>{hero.id}</li>
      </ul>
    </div>

  )
}

export default HeroItem
