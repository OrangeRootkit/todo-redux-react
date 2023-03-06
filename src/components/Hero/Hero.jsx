import React from 'react'
import s from './Hero.module.scss'

export const Hero = ({children}) => {
  return (
    <div className={s.hero}>{children}</div>
  )
}
