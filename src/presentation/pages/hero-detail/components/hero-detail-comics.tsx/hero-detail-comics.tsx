import { HeroDataResult } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http'
import Spinner from '@/presentation/components/spinner/spinner'
import React, { useCallback, useEffect, useState } from 'react'
import Styles from './hero-detail-comics-styles.scss'

interface Props{
  heroDataResultComic: HeroDataResult

}

let arrayForUrlHolding = []

const HeroDetailComic: React.FC<Props> = ({ heroDataResultComic }: Props) => {
  const [next, setNext] = useState(5)
  const [UrlComic, setUrlState] = useState([])

  const loadMore = useCallback(() => {
    setNext(prevRange => prevRange + 5)
  },[])

  const loadComicHero = async () => {
    const groupHero = await heroDataResultComic.load()
    const collectionUrl = groupHero.find(detailComics => detailComics)
    const responseComic = await fetch(makeApiUrl(`/characters/${collectionUrl.id}/comics?`))
    const responseComicJson = await responseComic.json()
    arrayForUrlHolding = responseComicJson.data.results
    setUrlState(arrayForUrlHolding)
  }

  useEffect(() => {
    loadComicHero()
  },[])

  return (

    <>

      {
        UrlComic.length !== 0
          ? (
            <>
              <h2>Comics</h2>
              <div className={Styles.contentComics}>
                {
                  UrlComic.slice(0,next).map((dataComic,index) =>
                    <div className={Styles.contentComic} key={index}>
                      <img className={Styles.imgThumbnail} src={`${dataComic.thumbnail?.path}.${dataComic.thumbnail?.extension}`}/>

                      <div className={Styles.textDescription}>
                        <p className={Styles.ok}>{dataComic.description !== null ? dataComic.title : 'Sem Descrição' }</p>
                        <small>{dataComic.format }</small>
                      </div>

                    </div>
                  )}
              </div>

              { next >= UrlComic.length ? null
                : <button className={Styles.customButton} onClick={loadMore}>See More</button>
              }
            </>
          )
          : <Spinner/>
      }

    </>
  )
}

export default HeroDetailComic
