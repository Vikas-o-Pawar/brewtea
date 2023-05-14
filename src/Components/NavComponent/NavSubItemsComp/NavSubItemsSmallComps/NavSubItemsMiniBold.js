import React from 'react'
import classes from './NavSubItemsMiniBold.module.css'
export default function NavSubItemsMiniBold(props) {
  return (
    <h5 className={classes.miniBold}>
        {props.itemName}
    </h5>
  )
}
