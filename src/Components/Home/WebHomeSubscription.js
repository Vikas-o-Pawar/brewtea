import React from 'react'
import classes from './WebHomeSubscription.module.css'
import Button  from '../ButtonComponent/Button'

export default function WebHomeSubscription() {
  return (
      <div className={classes.homeWebSubs}>

        <div className={classes.homeSubscriptionDiv}>
          <h1>This is what proper tea tastes like.</h1>
          <p>Subscriptions are faff free. You'll never look back.</p>
          <Button btnName={"SHOP SUBSCRIPTIONS"} myBtnClass={classes.btnSubs} />
        </div>

        <div className={classes.subsInfo}>
            <h1>100% Rolled Whole Leaves</h1>
            <p>Our tea is made from the freshest rolled whole leaves - two leaves and a bud from the top of the tea plant, gently rolled and dried. The result is a much better tea and a richer, tastier cup.</p>
        </div>
    </div>
  ) 
}
