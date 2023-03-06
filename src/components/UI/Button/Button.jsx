import React from 'react'
import './Button.scss'

export const Button = ({className, text, handleButton}) => {
  
    
  return (
    <button className={className} onClick={(e)=>handleButton(e)}>{text}</button>
  )
}
