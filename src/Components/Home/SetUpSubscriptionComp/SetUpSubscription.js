import React from 'react'
import classes from './SetUpSubscription.module.css'
import jugImg from '../../../Images/StartWithSubscription/SubscriptionJug.svg'
import clockImg from '../../../Images/StartWithSubscription/SubscriptionClock.svg'
import wheelImg from '../../../Images/StartWithSubscription/subscriptionWheel.svg'
import Button from '../../ButtonComponent/Button'

export default function SetUpSubscription() {
    return (
        <section className={classes.subscriptionMainSection}>
            <div className={classes.subscriptionMainDiv}>

                <div className={classes.subscriptionDivContainer}>

                    <div className={classes.subscriptionHeader}>
                        <h1>Never Run Out. Subscribe.</h1>
                    </div>

                    <div className={classes.cancellationDiv}>
                        <p>Set up a regular delivery and save 30%. A bonus when you start and on your 5th delivery. No minimum period, one click cancellation.</p>
                    </div>

                    <div className={classes["imagesDiv-Flex"]}>
                        <div className={classes.jugDiv}>
                            <img src={jugImg} alt="" className={`${classes.subsImg} ${classes.jugImg}`} />
                            <div className={classes.jugContentDiv}>
                                <h1>YOUR FAVOURITE</h1>
                                <p>Choose your go to blend.</p>
                            </div>
                        </div>

                        <div className={classes.clockDiv}>
                            <img src={clockImg} alt="" className={`${classes.subsImg} ${classes.clockImg}`} />
                            <div className={classes.clockContentDiv}>
                                <h1>AS OFTEN AS YOU LIKE</h1>
                                <p>Most have it monthly, but whatever works for you.</p>
                            </div>
                        </div>

                        <div className={classes.wheelDiv}>
                            <img src={wheelImg} alt="" className={`${classes.subsImg} ${classes.wheelImg}`} />
                            <div className={classes.wheelContentDiv}>
                                <h1>NO STRINGS ATTACHED.</h1>
                                <p>Change It. Pause It. Gift It. Add a one off treat. Whatever you like.</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.setUpYourSubsBtnDiv}>
                            <Button btnName={'SETUP YOUR SUBSCRIPTION'} myBtnClass={classes.subsBtn} />
                            <a href="/">Existing Subscriber? Update Here</a>
                    </div>


                </div>

            </div>

        </section>
    )
}
