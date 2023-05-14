import React from 'react'
import RatingStarComp from '../HomeMiniComps/RatingStarComp'
import classes from './TeaReviewCard.module.css'
// import randomImg from '../../../Images/bestSellerCard/bestSellerDecafCeylon.webp'

export default function TeaReviewCard(props) {
    const myStar = <RatingStarComp />

    return (
        <section className={classes.mainTeaReviewCardSec}>
            <div className={classes["card-mainDiv"]}>

                {/* <p>A lovely green tea, it's not bitter like most green teas and is very enjoyable! Thank you Brew Tea Company, this is the first green tea that I have actually enjoyed.</p> */}
                <p>{props.reviewMain}</p>

                <div className={classes.cardMiniDiv}>

                    <div className={classes.aboutUserDiv}>
                        {/* <h2>Marie D.</h2> */}
                        <h2>{props.userName}</h2>

                        {/* <p>Yunnan Green - Loose Leaf Tea</p> */}
                        <p>{props.userItem}</p>
                        <span>{myStar} {myStar} {myStar} {myStar} {myStar}</span>
                    </div>

                    <div className={classes.imgDiv}>
                        <img src={props.itemImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
