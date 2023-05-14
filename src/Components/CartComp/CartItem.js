import React, { useContext } from 'react'
import classes from './CartItem.module.css'
import dummyImg from '../../Images/bestSellerCard/bestsellerImgMalty.webp'
import CartContext from '../Context-Page1/Cart-Context';

export default function CartItem(props) {
    const cartCtx = useContext(CartContext);
    let id;
    if (props.itemQuan === "133g Box") {
        id = 1;
    } else if (props.itemQuan === "226g Box") {
        id = 2;
    } else if (props.itemQuan === "150g Box + Tin") {
        id = 3;
    } else if (props.itemQuan === "500g Box") {
        id = 4;
    } else if (props.itemQuan === "5 X 500g Box") {
        id = 5;
    } else if (props.itemQuan === "15") {
        id = 6;
    } else if (props.itemQuan === "40") {
        id = 7;
    } else if (props.itemQuan === "25 + Tin") {
        id = 8;
    } else if (props.itemQuan === "100") {
        id = 9
    } else if (props.itemQuan === "5 x 100") {
        id = 10;
    } else if (props.activeColor === "#FDCF46") {
        id = 11;
    } else if (props.activeColor === "rgb(234, 81, 72)") {
        id = 12;
    } else if (props.activeColor === "#000") {
        id = 13;
    } else if (props.activeColor === "rgb(247, 173, 80)") {
        id = 14;
    } else if (props.activeColor === "rgb(136, 129, 211)") {
        id = 15;
    } else if (props.activeColor === "rgb(255, 126, 118)") {
        id = 16;
    }

    console.log(props.activeColor)
    const removeItemHandler = () => {
        cartCtx.removeItem(id);
    }

    const addItemHandler = () => {
        cartCtx.addItem(
            {
                id: id,
                itemDescMain: props.itemDescMain,
                itemDesc: props.itemDesc,
                itemQuantityMain: props.itemQuan,
                itemQuantity: 1,
                amount: props.price,
                price: props.mainPrice
            }
        );
    }

    return (
        <section className={classes.cartItemMainSection}>

            <div className={classes["cartItem-DescDiv"]}>
                <div className={classes["cartItem-ImgDiv"]}>
                    <img src={dummyImg} alt="" />
                </div>

                <div className={classes["cartItem-Desc"]}>
                    <span>{props.itemDescMain} - {props.itemDesc} - {props.itemQuan}</span>
                    {/* <span>ENGLISH BREAKFAST - LOOSE LEAF TEA- 113G</span> */}
                </div>
            </div>

            <div className={classes.horizontalLineDiv}>

            </div>

            <div className={classes.cartItemValueDiv}>
                <div className={classes.cartItemsQuantityDiv}>
                    <span>Quantity: {props.quantity}</span>
                    {/* <span>Quantity: 4</span> */}
                </div>

                <div className={classes["cartItem-AddRemoveItemDiv"]}>
                    <span className={classes.removeSpan}>REMOVE</span>
                    <button className={classes.removeItemBtn} onClick={removeItemHandler}>-</button>
                    <button className={classes.addItemBtn} onClick={addItemHandler}>+</button>
                </div>
            </div>

            <div className={classes.horizontalLineDiv}>

            </div>

            <div className={classes.priceDiv}>
                <div className={classes.itemFinalPriceDiv}>
                    £{props.price}
                    {/* £22.80 */}
                </div>
            </div>

        </section>
    )
}
