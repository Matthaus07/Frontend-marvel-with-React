import React from 'react'
import Styles from './header-main-styles.scss'
// import imgObjective from '../../../assets/marca-objective2.png'
const MainHeader: React.FC = () =>{
  return (
    <header className={Styles.header}>
      {/* <img src={imgObjective} />  */}
      <div className={Styles.headerContent}>

      <h5>Matthaus Brandão</h5>
      <h6>Teste de Frontend</h6>
      <div className={Styles.backgroundAvatar}>
      <h1>CB</h1>
      </div>
      </div>
    </header>
  )
}

export default MainHeader