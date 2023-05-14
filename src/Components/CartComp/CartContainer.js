import { React, useContext } from 'react'
import classes from './CartContainer.module.css'
import Button from '../ButtonComponent/Button'
import CartItem from './CartItem'
import CartContext from '../Context-Page1/Cart-Context'

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const closeCartHandler = () => {
        props.cartIsClosed(false);
    }

    const numOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + 1;
      }, 0);
    

    return (
        <section className={classes.mainCartSection}>
            <div className={classes.cardDiv}>
                <div className={classes.itemCountDiv}>
                    <span>{numOfCartItems} items</span>
                    <button className={classes.cancelBtn} onClick={closeCartHandler}>X</button>
                </div>

                <div className={classes.cartItemDiv}>
                    {cartCtx.items.map((item) => {
                       return (
                        <CartItem key={item.id} activeColor={item.activeColorCtx} itemDescMain={item.itemDescMain} itemDesc={item.itemDesc} itemQuan={item.itemQuantityMain} quantity={item.itemQuantity} price={item.amount} mainPrice={item.price} />
                       ) 
                    })}

                </div>


                <div className={classes.cartFooterDiv}>
                    <div className={classes.cartTotalDiv}>
                        <p>SUBTOTAL</p>
                        <p>£{cartCtx.subtotal}</p>
                    </div>

                    <div className={classes.cartButtonsDiv}>
                        <button className={classes.goToTrolleyBtn}>GO TO TROLLEY</button>
                        <Button btnName={"GO TO CHECKOUT"} myBtnClass={classes.checkOutBtn} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart