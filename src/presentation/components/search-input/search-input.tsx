import React from 'react'
import { LoadHeroesList } from '@/domain/usecases'
import Styles from './search-input-styles.scss'
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Filter: React.FC<Props> = (props:Props) =>{
  
    return (
      <input className={Styles.customInputSearch} {...props} />
      )
}

export default Filter