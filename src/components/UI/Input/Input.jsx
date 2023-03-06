import React from 'react'
import { useState } from 'react'
import s from './Input.module.scss'

export const Input = ({changeValue, value, backGround}) => {

  //   (input.style.backgroundColor = "rgba(255, 0, 0, 0.4)"),
//       setTimeout(() => (input.style.backgroundColor = "#FFF"), 1000));
// };
  // function Some () {
  //   let a = 'blue'
  //   return
  // }





  return (
    <input value={value} style={{backgroundColor: backGround}} className={s.input} placeholder="Add task..."  onChange={(e)=>changeValue(e)} />

    // <input className={s.input} placeholder="Add task..." onChange={} />
  )
}
