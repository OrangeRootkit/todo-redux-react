import React from 'react'
import s from './ListTask.module.scss'

export const ListTask = ({children, }) => {

  
  return (
    <div className={s.listTask}>{children}</div>
  )
}
