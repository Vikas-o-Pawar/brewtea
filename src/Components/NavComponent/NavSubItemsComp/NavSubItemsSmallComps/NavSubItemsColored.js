import React from 'react'
import classes  from './NavSubItemsColored.module.css';

export default function NavSubItemsColored(props) {
  return (
    <span className={classes.coloredSpan}>
      {props.itemName}
    </span>
  )
}

