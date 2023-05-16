import { React, useState, useEffect } from 'react'
import NavItems from './NavUI/NavItems'
import classes from './Navbar.module.css'
import Search from './NavUI/Search'
import Cart from './NavUI/Cart'
import NavSubItemsCard from './NavUI/NavSubItemsCard'
import MobileNavBtn from './MobileNavBtn/MobileNavBtn'
import MobileNav from './MobileNav/MobileNav'
import CartContainer from '../../Components/CartComp/CartContainer'

export default function Navbar(props) {
    const [navhovered, setnavHovered] = useState(false);
    const [name, setName] = useState('');
    const [megaHoveredState, setMegaHoveredState] = useState(false);
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [cartBtnClicked, setCartBtnClicked] = useState(false);
    // to check if the cart button in the navbar is clicked

    // for opening cart
    const cartIsOpenHandler = (boolean) => {
        setCartBtnClicked(true);
    }

    const cartIsClosedHandler = (boolean) => {
        setCartBtnClicked(boolean)
    }
    // here I check whether I navbar item is being hovered or not. If its not, then state is set to false, thus not rendering the navsubItemsCard
    function hoveredOrNot(bool, name) {
        setnavHovered(bool);
        setName(name);
    }

    // check whether hovering is happening on the navsubItemscard, if it is render the card, otherwise don't
    const megaNavHoverHandler = (boolean) => {
        setMegaHoveredState(boolean);
    }

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 320px)").matches
    );

    // This function updates the isMobile state when the screen size changes
    const handleWindowSizeChange = () => {
        setIsMobile(window.matchMedia("(max-width: 1150px)").matches);
    };

    // Register a listener to handle window size changes
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, []);

    // When clicked on burger, then this function is executed
    const burgerClickedHandler = (bool) => {
        setBurgerClicked(bool)
    }

    const burgerCloseHandler = (bool) => {
        setBurgerClicked(bool);
    }


    return (
        <section className={classes.mainNavSection}>

            {isMobile && <MobileNavBtn burgerClicked={burgerClickedHandler} />}
            {burgerClicked && <MobileNav burgerClosed={burgerCloseHandler} />}


            <span className={classes.mainNavSpan}>BREW TEA CO</span>

            <div className={classes.navItemSection}>
                <ul className={classes.navItemsList}>
                    <NavItems itemName={'SHOP'} hovered={hoveredOrNot} megaHovered={megaHoveredState} />
                    <NavItems itemName={'THE GIFT SHOP'} hovered={hoveredOrNot} megaHovered={megaHoveredState} />
                    <NavItems itemName={'SUBSCRIBE'} hovered={hoveredOrNot} megaHovered={megaHoveredState} />
                    <NavItems itemName={'BREW COINS'} hovered={hoveredOrNot} megaHovered={megaHoveredState} />
                    <NavItems itemName={'ABOUT'} hovered={hoveredOrNot} megaHovered={megaHoveredState} />
                </ul>
            </div>


            {/* {navhovered === true && name !== "BREW COINS" && name !== "SUBSCRIBE" && <NavSubItemsCard navItemName={name}
                megaNavHover={megaNavHoverHandler} />} */}

            {/* <NavSubItemsCard navItemName = {'ABOUT'} >
            
         </NavSubItemsCard> */}

            <div className={classes.navItemSection2}>
                <div className={classes.searchDiv}>
                    <Search placeholder={'Search'} />
                </div>

                <span className={classes.navBatch}>
                    <span className={classes.navInnerBatch}>
                        B
                    </span>
                </span>

                <button className={classes.loginNavBtn}>
                    LOGIN
                </button>

                <Cart cartIsOpen={cartIsOpenHandler} />
            </div>

            {cartBtnClicked && <CartContainer cartIsClosed={cartIsClosedHandler} />}
        </section>
    )
}
