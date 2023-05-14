import React from 'react'
import classes from './ClassicColoredBtn.module.css'

export default function ClassicColoredBtn(props) {
  return (
    <button className={classes.classicColoredBtnClass}>
        {props.coloredBtnName}
    </button>
  )
}
