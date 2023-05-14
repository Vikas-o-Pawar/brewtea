import React from 'react'
import classes from './MobileNavBtn.module.css';

export default function MobileNavBtn(props) {

  const burgerDivClickedHandler = () => {
    props.burgerClicked(true);
  }

  return (
    <div className={classes.mainNav} onClick={burgerDivClickedHandler}>
      <span className={classes.mySpan}></span>
      <span className={classes.mySpan}></span>
      <span className={classes.mySpan}></span>
    </div>
  )
}
