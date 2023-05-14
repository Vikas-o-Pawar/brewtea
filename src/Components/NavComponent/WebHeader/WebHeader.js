import React from 'react'
import classes from './WebHeader.module.css';

export default function WebHeader(props) {
  return (
    <section className={classes.mainHeaderDiv}>
      <div className={classes.headerDiv}>
        <span>{props.spanHeaderName}</span>

      </div>
    </section>
  )
}
