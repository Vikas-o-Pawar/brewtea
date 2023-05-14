import React from 'react'
import classes from './NavAboutItem.module.css';
import NavSubItemsColored from './NavSubItemsSmallComps/NavSubItemsColored';
import NavSubItemsMain from './NavSubItemsSmallComps/NavSubItemsMain';
import NavSubItemCancelBtn from './NavSubItemsSmallComps/NavSubItemCancelBtn';

export default function NavAboutItem() {
  return (
    <div className={classes.aboutMainDiv}>
      <section className={classes.reallyUseFulSection}>
        <NavSubItemsMain subItemMain={"REALLY USEFUL"} />
        <span className={classes.underlineSpan}>Brew Coins</span>
        <span className={classes.underlineSpan}>Your Account</span>
        <span className={classes.underlineSpan}>Manage Your Subscription</span>
        <span className={classes.underlineSpan}>Talk To Us</span>
        <span className={classes.underlineSpan}>Talk FAQs</span>
      </section>

      <section className={classes.otherInfoSection}>
        <NavSubItemsMain subItemMain={"OTHER INFORMATION"} />
        <span className={classes.underlineSpan}>About Us</span>
        <span className={classes.underlineSpan}>Stickist Partnerships</span>

        <NavSubItemsColored itemName={"Corporate Gifts"} />
      </section>

      <NavSubItemCancelBtn />
    </div>
    )
} 
