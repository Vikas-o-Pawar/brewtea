import React from 'react'
import classes from './TeaReview.module.css'
import TeaReviewSlider from './TeaReviewSlider'
import RatingStarComp from '../HomeMiniComps/RatingStarComp'

function TeaReview(props) {
  const myStar = <RatingStarComp />

  return (
    <div className={classes.mainReviewDiv}>
      <div className={classes.horizontalLineDiv}>

      </div>
      <div className={classes.reviewHeaderDiv}>
        <h1>Brewed in about 70,252 Kitchens</h1>
        <span>*On our last count</span>
      </div>

      <div className={classes.sliderTeaReviewDiv}>
        <TeaReviewSlider />
      </div>

      <div className={classes.reviewDiv}>
        <p>
          {myStar} {myStar} {myStar} {myStar} {myStar}    4.9 star rating 21970 Reviews

        </p>
      </div>
    </div>
  )
}

export default TeaReview
