import React from 'react'
import classes from './WebHomeGridSection.module.css'
import teaImg from '../../Images/HomeGridSec/HomeGridSecImg-1.webp';
import kitImg from '../../Images/HomeGridSec/HomeGridSectionImg-2.webp'
import GiftsImg from '../../Images/HomeGridSec/WebHomeGridSectionImg-3.webp'
import subscriptionsImg from '../../Images/HomeGridSec/WebHomeGridSectionImg-4.webp'

export default function WebHomeGridSection() {
  return (
    <section className={classes.mainGridSec}>

        <div className={classes.gridDiv1}>
            <a href="/">
            <img src={teaImg} alt="" className={classes.homeImages} />
            </a>
            <h1>Tea</h1>
        </div>

        <div className={classes.gridDiv2}>
            <a href="/">
                <img src={kitImg} alt=""  className={classes.homeImages}/>
            </a>
            <h1>Kit</h1>

        </div>

        <div className={classes.gridDiv3}>
            <a href="/">
                <img src={GiftsImg} alt="" className={classes.homeImages} />
            </a>
            <h1>Gifts</h1>
        </div>

        <div className={classes.gridDiv4}>
            <a href="/">
                <img src={subscriptionsImg} alt="" className={classes.homeImages} />
            </a> 
            <h1>Subscriptions</h1>

        </div>
      
    </section>
  )
}
