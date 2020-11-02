import React from 'react'
import searchIcon from '../../../../public/search-icon.svg'

import Styles from './search-input-styles.scss'
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Filter: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input className={Styles.customInputSearch} {...props} />
      <span>
        <img src={searchIcon} />
      </span>
    </div>
  )
}

export default Filter
