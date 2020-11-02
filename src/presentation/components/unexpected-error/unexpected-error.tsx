import React from 'react'
import unexpectedErrorImg from '../../../../public/unexpected-error.svg'
import Styles from './unexpected-error-styles.scss'
const UnexpectedError: React.FC = () => {
  return (
    <div className={Styles.contentMessage}>
      <img className={Styles.unexpectedImage} src={unexpectedErrorImg} />
      <h4>Erro inesperado. Por favor, tente mais tarde</h4>
    </div>

  )
}

export default UnexpectedError
