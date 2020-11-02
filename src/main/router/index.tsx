import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeHeroList } from '../factories/pages/main-hero-list'
import { makeHeroDetail } from '../factories/pages/hero-detail'

const Router: React.FC = () => {

  return (
  
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeHeroList} />
          <Route path="/hero-detail/:id" exact component={makeHeroDetail} />
        </Switch>
      </BrowserRouter>
  )
}

export default Router