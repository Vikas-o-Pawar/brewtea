import React from 'react'
import classes from './BestsellerCard.module.css'

function BestsellerCard(props) {
    const myStar = <span className={classes.cardReview}> &#9733;</span>

    const myStyle = {
        backgroundColor: props.bgColor
    }
    return (
        <section className={classes['cardMainSec']}>
            <div className={classes['cardImgDiv']}>
                <img src={props.cardImg} alt="" className={classes.cardImg} />
            </div>

            <div className={classes['card-ItemName']} style={myStyle}>
                <p>{props.itemName}</p>
                {/* <p>Assam</p> */}
            </div>

            <div className={classes['card-desc']} >
                <p>{props.cardDesc}</p>
                {/* <p>Bold & Rich</p> */}
            </div>

            <div className={classes['cardReview-Price']}>
                <p>from <b> £ {props.cardPrice} | </b> {myStar} {myStar} {myStar} {myStar} </p>

                {/* <p>from <b> £ 8.50 | </b> {myStar} {myStar} {myStar} {myStar} </p> */}
            </div>
        </section>
    )
}

export default BestsellerCard
