import React from 'react'
import classes from './BrewCoins.module.css'
import bcImg1 from '../../../Images/BrewCoinsSec/brewCoinsImg-1.svg'
import bcImg2 from '../../../Images/BrewCoinsSec/brewCoinsImg-2.svg'
import bcImg3 from '../../../Images/BrewCoinsSec/brewCoinsImg-3.svg'
import Button from '../../ButtonComponent/Button'
export default function BrewCoins() {
    return (
        <section className={classes.mainBrewCoinsSection}>

            <div className={classes.brewCoinsMainDiv}>

                <div className={classes.brewCoinsDivContainer}>

                    <div className={classes.brewCoinsHeader}>
                        <h1>Brew Coins, what are they?</h1>
                    </div>

                    <div className={classes.brewCoinsDescDiv}>
                        <p>Brew Coins are our way of saying thanks for being a loyal tea-drinker.
                            Order tea. Get Coins. Refer a friend. Get Coins. Start a subscription. Get Coins.
                            Use them a few at a time for a discount or save them up for an even bigger splurge.</p>
                    </div>

                    <div className={classes["imagesDiv-Flex"]}>
                        <div className={classes.img1Div}>
                            <img src={bcImg1} alt="" className={`
                    ${classes.bcImgs} ${classes.bcImg1Class}`} />
                            <div className={classes.img1ContentDiv}>
                                <h1>SIGN UP</h1>
                                <p>Setup an account with us, we'll give you 50 Brew Coins. No catch.</p>

                            </div>
                        </div>

                        <div className={classes.img2Div}>
                            <img src={bcImg2} alt="" className={`
                    ${classes.bcImgs} ${classes.bcImg2Class}`} />

                            <div className={classes.img2ContentDiv}>
                                <h1>EARN BREW COINS</h1>
                                <p>You earn every time you spend. You get 1 Brew Coin for every £1 you spend.</p>
                            </div>
                        </div>

                        <div className={classes.img3Div}>
                            <img src={bcImg3} alt=""
                                className={`
                    ${classes.bcImgs} ${classes.bcImg3Class}`} />

                            <div className={classes.img3ContentDiv}>
                                <h1>SPEND BREW COINS</h1>
                                <p>Use your Coins at checkout to get money off your order, including your subscription.</p>
                            </div>
                        </div>


                        <div className={classes.signMeUpDiv}>
                            <Button btnName={"SIGN ME UP"} myBtnClass={classes.signMeUpBtn} />
                            <a href="/">Learn A Bit More</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
