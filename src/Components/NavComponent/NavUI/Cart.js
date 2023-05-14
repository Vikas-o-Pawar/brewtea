import React, { useContext } from 'react'
import classes from './Cart.module.css'
import CartContext from '../../Context-Page1/Cart-Context'

export default function Cart(props) {
  const ctx = useContext(CartContext);

  const numOfCartItems = ctx.items.reduce((currNumber, item) => {
    return currNumber + 1;
  }, 0);

  const openCartHandler = () => {
    props.cartIsOpen(true);
  }

  return (
    <>
      <div className={classes.svgDiv} onClick={openCartHandler}>
        <button></button>
      </div>
      <button className={classes.batch}>
        {numOfCartItems}
      </button>
    </>

  )
}
