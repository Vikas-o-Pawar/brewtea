import React from 'react'
import classes from './NavGiftShop.module.css';
import NavSubItemsMiniBold from './NavSubItemsSmallComps/NavSubItemsMiniBold';
import NavSubItemsMain from './NavSubItemsSmallComps/NavSubItemsMain';
import NavSubItemsColored from './NavSubItemsSmallComps/NavSubItemsColored';
import NavSubItemCancelBtn from './NavSubItemsSmallComps/NavSubItemCancelBtn';
import GiftNavImg from '../../../Images/NavGiftShopImg.webp';

export default function NavGiftShop() {
  return (
   <div className={classes.giftMainDiv}>
    <section className={classes.TheGiftShopSection}>
        <NavSubItemsMain subItemMain={"THE GIFT SHOP"} />

        <NavSubItemsMiniBold itemName={"THE GIFT SHOP IS OPEN"} />
        <span  className={classes.underlineSpan}>Shop Gifts</span>

        <NavSubItemsColored itemName={"THE TASTING CLUB"} />
        <span className={classes.underlineSpan}>Squeeze the Day</span>
        <span className={classes.underlineSpan}>Blowing Rasberries</span>
        <span className={classes.underlineSpan}>Rhuby Tuesday</span>

        <img src={GiftNavImg} className={classes.navGiftImg}  alt="" />

    </section>


    <section className={classes.ByCollectionSection}>
        <NavSubItemsMain subItemMain={"BY COLLECTION"} />
        <NavSubItemsColored itemName={"Bundles & Sets"} />
        <span className={classes.underlineSpan}>Kit Bestsellers</span>
        <span className={classes.underlineSpan}>Tea Bestsellers</span>
        <span className={classes.underlineSpan}>Over &amp;pound;50</span>

    </section>

    <section className={classes.FeaturedGiftsSection}>
        <NavSubItemsMain subItemMain={"FEATURED GIFTS"} />

        <NavSubItemsMiniBold itemName={"SUBSCRIPTIONS"} />
        <span className={classes.underlineSpan}>Dift Subscription</span>
        <NavSubItemsColored itemName={"Set Up A Tea Subscription"} />

     </section>

    <section className={classes.allGiftsSection}>
        <NavSubItemsMain subItemMain={"ALL GIFTS"} />
        <NavSubItemsMiniBold iteName={"GIFT BOXES"} />
        <span className={classes.underlineSpan}>Loose Leaf In A Cup Gift Set</span>
        <span className={classes.underlineSpan}>Pick & Mix Starter Kit</span>

        <NavSubItemsMiniBold itemName={"BUNDLES"} />
        <NavSubItemsColored itemName={"Tin Display Set"} />
        <NavSubItemsColored itemName={"Loose Leaf In A Cup Kit"} />
        <NavSubItemsColored itemName={"Loose Leaf In A Pot Kit"} />

        <NavSubItemsMiniBold itemName={"LOADS More"} />
        <span className={classes.underlineSpan}>Corporate Gifts</span>
        <span className={classes.underlineSpan}>Shop All Gifts</span>
    </section>

    <NavSubItemCancelBtn />
   </div>
  )
}
