import React, { useEffect, useRef, useState } from 'react'
import MainHeader from '@/presentation/components/header/main-header'
import { HeroDataResult } from '@/domain/usecases'
import Styles from './hero-detail-styles.scss'
import HeroDetailComic from './components/hero-detail-comics.tsx/hero-detail-comics'
import Spinner from '@/presentation/components/spinner/spinner'
import { Link } from 'react-router-dom'

interface Props {
  heroDataResult: HeroDataResult
}

const HeroDetail: React.FC<Props> = ({ heroDataResult }: Props) => {
  const [state, setState] = useState({ hero: [] as HeroDataResult.Model[] ,isLoading: false })
  const loadHeroDetail = async () => {
    try {
      const groupHero = await heroDataResult.load()
      setState({ hero: groupHero, isLoading: true })
    } catch (err) {
      setState({ ...state, isLoading: true })
    }
  }

  useEffect(() => {
    loadHeroDetail()
  },[])

  return (
    <>
      <MainHeader />
      <div className={Styles.spaceBottomBetween}></div>
      {
        state.isLoading
          ? (
            <>
              {state.hero.map(hero =>
                <div key={hero.id}>
                  <div className={Styles.detailBackgroundImg}>
                    <Link to={'/'}>
                      <div className={Styles.backMainHero}>Voltar para a Home</div>
                    </Link>
                    <div className={Styles.detailItemBackground}>

                      <div className={Styles.thumbnailBackground} style={{ backgroundImage: `url(${hero.thumbnail?.path}.${hero.thumbnail?.extension})` }}></div>
                    </div>

                  </div>
                  <div className={Styles.container}>
                    <div className={Styles.contentDetailHero}>

                      <img className={Styles.cotentBackgroundImg} src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt=""/>

                      <p>{hero.name}</p>
                      <p>{hero.description}</p>
                    </div>
                  </div>
                </div>
              )}
              <HeroDetailComic heroDataResultComic={heroDataResult} />

            </>

          )
          : <Spinner/>
      }

    </>
  )
}

export default HeroDetail
