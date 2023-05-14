import React from 'react'
import Button from '../../ButtonComponent/Button'
import classes from './Bestsellers.module.css'
import BestsellerSlider from '../BestsellersComp/BestsellerSlider'

function Bestsellers() {
    return (
        <section className={classes.bestsellersMainSection}>
            <section className={classes.bestsellersInfoSec}>
                <h1>Bestsellers</h1>
                <p>From citrusy Earl Grey to spicy Chai. From light Darjeeling to grassy Green Tea. Explore our full range of tasty tea, all made with rolled whole leaves.</p>

                <Button btnName={'SHOP ALL'} myBtnClass={classes.shopAllBtn} />
            </section>

            <section className={classes.bestsellerMainSlider}>
                <BestsellerSlider />
            </section>
        </section>
    )
}

export default Bestsellers
