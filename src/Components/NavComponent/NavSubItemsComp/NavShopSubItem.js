import React from 'react'
import classes from './NavShopSubItem.module.css'
import NavSubItemsMain from './NavSubItemsSmallComps/NavSubItemsMain'
import NavSubItemsMiniBold from './NavSubItemsSmallComps/NavSubItemsMiniBold'
import NavSubItemsColored from './NavSubItemsSmallComps/NavSubItemsColored'
import shopNavImg from './../../../Images/navBarShopImage.webp';
import NavSubItemCancelBtn from './NavSubItemsSmallComps/NavSubItemCancelBtn'

export default function NavShopSubItem() {
  return (
      <div className={classes.shopMainDiv}>
        <section className={classes.featuredSection}>
          <NavSubItemsMain subItemMain={"FEATURED"} />

          <NavSubItemsMiniBold itemName={"BESTSELLERS"} />
          <NavSubItemsColored itemName={"SET UP A TEA SUBSCRIPTION"} />
          <span className={classes.underlineSpan} >Buy 3 and Save</span>

          <NavSubItemsMiniBold itemName={"TASTING CLUB"} />
          <NavSubItemsColored itemName={"TASTING CLUB BUNDLE"} />
          <span  className={classes.underlineSpan} >Squeeze the Day</span>
          <span className={classes.underlineSpan} >Blowing Rasberries</span>
          <span className={classes.underlineSpan} >Rhuby Tuesday</span>
          <img src={shopNavImg} className={classes.navImgShop} alt="" />
        </section>

        
        <section className={classes.teaSection}>
          <NavSubItemsMain subItemMain={"TEA"} />

          <NavSubItemsMiniBold itemName={"TEA"} />
          <span className={classes.underlineSpan} >Buy 3 & Save</span>
          <NavSubItemsColored  itemName ={"English Breakfast"} />
          <span className={classes.underlineSpan} >Earl Grey</span>
          <span className={classes.underlineSpan} >Assam</span>
          <span className={classes.underlineSpan} >Chai</span>
          <span className={classes.underlineSpan} >Darjeeling</span>
          <span className={classes.underlineSpan} >Ceylon</span>
          <span className={classes.underlineSpan}>Lapsang</span>
          <span className={classes.underlineSpan}>Yunan Green</span>
          <span className={classes.underlineSpan}>All Tea</span>

          <NavSubItemsMiniBold itemName={"DECAFFEINATED"} />
          <span className={classes.underlineSpan}>Decaffeinated Tea</span>
          <span className={classes.underlineSpan}>Decaffeinated Earl Grey</span>
        </section>


        <section className={classes.kitSection}>
          <NavSubItemsMain subItemMain={"KIT"} />

          <NavSubItemsMiniBold itemName={"TEAPOTS & BREWING"} />
          <NavSubItemsColored  itemName ={"Teapot For One"} />
          <span className={classes.underlineSpan}>Tea Pot For Two</span>
          <NavSubItemsColored  itemName ={"Teapot For Pot Kit"} />
          <NavSubItemsColored  itemName ={"Teapot For Cup Kit"} />
          <span className={classes.underlineSpan}>Replacement Glass</span>


          <NavSubItemsMiniBold itemName={"STORE & SERVE"} />
          <span className={classes.underlineSpan}>Mug & Jug</span>
          <span className={classes.underlineSpan}>Scoop</span>
          <span className={classes.underlineSpan}>Tea Tins</span>
          <span className={classes.underlineSpan}>Tin Tray</span>
        </section>


        <section className={classes.giftsSection}>
          <NavSubItemsMain subItemMain={"GIFTS"} />

          <NavSubItemsMiniBold itemName={"ALL GIFTS"} />
          <span className={classes.underlineSpan}>Gift Subscription</span>
          <span className={classes.underlineSpan}>Gift Card</span>
          <NavSubItemsColored itemName={"Tea In A Tin"} />

          <NavSubItemsMiniBold itemName={"GIFT BOXES"} />
          <NavSubItemsColored itemName={"Loose Leaf Starter Kit"} />
          <span className={classes.underlineSpan}>Loose Leaf In A Cup Gift Set</span>
          <span className={classes.underlineSpan}>Pick & Mix Starter Kit</span>

          <NavSubItemsMiniBold itemName={"BUNDLES"} />
          <NavSubItemsColored itemName={"Tin Display Set"} />
          <span className={classes.underlineSpan}>Tea For Two</span>
          <span className={classes.underlineSpan}>The Whole Shebang</span>
          <span className={classes.underlineSpan}>The Ultimate Tea Set</span>
        </section>

        <NavSubItemCancelBtn />
      </div>
  )
}
