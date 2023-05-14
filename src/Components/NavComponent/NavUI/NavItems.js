import {React, useEffect, useState } from 'react'
import classes from './NavItems.module.css'

export default function NavItems(props) {
  const [hovered, setHovered] = useState(false);

  const onMouseEnterHandler = () => {
    setHovered(true);
  }
  const onMouseLeaveHandler = () => {
    if(!props.megaHovered) {
      setTimeout(() => {
        setHovered(false);      
      }, 500);
    }
  }

  useEffect(() => {
    props.hovered(hovered, props.itemName);
  }, [hovered]) 

 

  return (
    <li onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={classes.list}>
        <a href="/" className={classes.tag}>{props.itemName}</a>
    </li>
    
  )
}
