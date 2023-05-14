import React from 'react'
import classes from './ClassicNormalBtn.module.css'

export default function ClassicNormalBtn(props) {

  
  return (
        <button className={`${classes.ClassicNormalBtnClass}`} onClick={props.onClick} id={props.inheritedClass}>{props.classicBtnName}</button>
  )
}
