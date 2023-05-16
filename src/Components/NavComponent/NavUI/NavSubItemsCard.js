import React, { useEffect, useState } from 'react'
import classes from './NavSubItemsCard.module.css'
import NavShopSubItem from '../NavSubItemsComp/NavShopSubItem'
import NavGiftShop from '../NavSubItemsComp/NavGiftShop'
import NavAboutItem from '../NavSubItemsComp/NavAboutItem'

export default function NavSubItemsCard(props) {
    const[itemHovered, setItemHovered] = useState(true);

    const enterItemHoveredHandler = () => {
      setItemHovered(true);
      console.log(itemHovered);
    };
  
    const exitItemHoveredHandler = () => {
      setItemHovered(false);
    };

    useEffect(() => {
      props.megaNavHover(itemHovered);
      console.log(itemHovered);
    }, [itemHovered])

  return (
    <div onMouseEnter={enterItemHoveredHandler} onMouseLeave={exitItemHoveredHandler} className={classes.card}>
        {props.navItemName === "SHOP" && <NavShopSubItem />}
        {props.navItemName === "THE GIFT SHOP" && <NavGiftShop />}
        {props.navItemName === "ABOUT" && <NavAboutItem /> }
      {props.children}
    </div>
  )
}
