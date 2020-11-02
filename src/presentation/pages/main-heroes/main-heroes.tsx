import React,{ useEffect, useState } from 'react'
import MainHeader from '@/presentation/components/header/main-header'
import HeroesList from '@/presentation/pages/main-heroes/components/heroes-list/heroes-list'
import { LoadHeroesList } from '@/domain/usecases'
import Styles from './main-heroes-styles.scss'
import Pagination from 'react-js-pagination'
import Filter from '@/presentation/components/search-input/search-input'
import Spinner from '@/presentation/components/spinner/spinner'

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
      setState({ ...state, isLoading: false, mainError: 'error.message' })
    }
  }

  const hadleFilterChange = e => setSeach(e.target.value)

  const handleSearchHero = () => {
    if (search !== '') {
      const endpoint = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=83d65c3fe4e9bd364cd51734e06563d8&hash=70f4690b2168e082fcc707253025b8db`
      fetch(endpoint).then(response => {
        response.json().then(function (data) {
          setFilterDisplay(data.data.results)
        })
      })
    }
  }

  useEffect(() => {
    loadAllHeroes()
    handleSearchHero()
  },[search])

  return (
    <>
      <MainHeader />
      <div className={Styles.spaceBottomBetween}></div>

      { state.isLoading

        ? <div className={Styles.container}>
          <h2>Busca de Personagens</h2>
          <p>Nome do Personagem</p>
          <Filter value={search} onChange={hadleFilterChange}/>

          <div>{search !== '' ? filterDisplay.length : state.heroes.length } resultados encontrados</div>
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

        : <Spinner/>
      }
    </>
  )
}
export default MainHeroes
