import React,{ useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import MainHeader from '@/presentation/components/header/main-header'
import HeroesList from '@/presentation/pages/main-heroes/components/heroes-list/heroes-list'
import { LoadHeroesList } from '@/domain/usecases'
import Styles from './main-heroes-styles.scss'
import Filter from '@/presentation/components/search-input/search-input'
import Spinner from '@/presentation/components/spinner/spinner'
import { makeApiUrl } from '@/main/factories/http'
import UnexpectedError from '@/presentation/components/unexpected-error/unexpected-error'

interface Props {
  heroeslist: LoadHeroesList
}

const MainHeroes: React.FC<Props> = ({ heroeslist }: Props) => {
  const PER_PAGE = 4
  const [state, setState] = useState({
    isLoading: false,
    mainError: '',
    heroes: [] as LoadHeroesList.Model[]
  })
  const [search, setSeach] = useState('')
  const [statePage, setPage] = useState(1)
  const [filterDisplay, setFilterDisplay] = useState([])
  const indexOfLastTodo = statePage * PER_PAGE
  const indexOfFirstTodo = indexOfLastTodo - PER_PAGE
  const currentTodos = state.heroes.slice(indexOfFirstTodo, indexOfLastTodo)

  const handlePageChange = (pageNumber: number) => setPage(pageNumber)

  const loadAllHeroes = async () => {
    try {
      const groupHeroes = await heroeslist.loadAll()
      setState({ ...state, heroes: groupHeroes, isLoading: true })
    } catch (err) {
      setState({ ...state, isLoading: false, mainError: 'Ocorreu um erro inesperado. Por favor tente mais tarde!' })
    }
  }

  const hadleFilterChange = e => setSeach(e.target.value)

  const handleSearchHero = async () => {
    if (search !== '') {
      const endpoint = makeApiUrl(`/characters?nameStartsWith=${search}`)
      const fetchResult = await fetch(endpoint)
      const fetchResultJson = await fetchResult.json()
      setFilterDisplay(fetchResultJson.data.results)
    }
  }

  useEffect(() => {
    loadAllHeroes()
    handleSearchHero()
  },[search])

  return (
    <>
      <MainHeader />

      { state.isLoading

        ? <div className={Styles.container}>

          <div className={Styles.ContentSearchHero}>
            <h2>Busca de Personagens</h2>
            <p className={Styles.TextNameHero}>Nome do Personagem</p>
            <Filter value={search} onChange={hadleFilterChange}/>
          </div>
          <div className={Styles.spaceBottomBetween}></div>

          <HeroesList heroes={search !== '' ? filterDisplay : currentTodos}/>
          <Pagination
            hideDisabled
            activePage={ statePage }
            itemsCountPerPage={ PER_PAGE }
            totalItemsCount={ search === '' ? state.heroes.length : 0}
            pageRangeDisplayed={ 4 }
            onChange={ handlePageChange }
            itemClass={Styles.listPagination}
            activeLinkClass={Styles.ItemClass}
            innerClass={Styles.pagination}
            linkClass={Styles.linkCustomize}
            activeClass={Styles.ItemClass} />
        </div>

        : state.mainError === '' ? <Spinner/> : <UnexpectedError/>
      }
    </>
  )
}
export default MainHeroes
