import React from 'react'
import classes from './NavSubItemsMain.module.css'
// here feature, tea, kit like text is rendred

export default function NavSubItemsMain(props) {
  return (
    <h3 className={classes.hThreeClass}>
        {props.subItemMain}
    </h3>
  )
}
