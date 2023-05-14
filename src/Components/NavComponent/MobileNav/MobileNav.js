import React from 'react'
import classes from './MobileNav.module.css'
import Button from '../../ButtonComponent/Button'

function MobileNav(props) {
    const navCloseHandler = () => {
        props.burgerClosed(false);
    }

    return (
        <section className={classes.mobileNavSection}>
            <div className={classes.mobileHeaderNav}>
                <h2>BREW TEA CO</h2>
                <button id={classes.closeBtn} onClick={navCloseHandler}>X</button>
            </div>

            <nav className={classes.mobileNavbar}>
                <li><a href="/">Shop </a></li>
                <li><a href="/">GIFT SHOP</a></li>
                <li><a href="/">SUBSCRIBE</a></li>
                <li><a href="/">BREW COINS</a></li>
                <li><a href="/">ABOUT</a></li>
            </nav>

            <div className={classes.userInputDiv}>
                <input type="text" className={classes.mobileNavSearch} placeholder='Search' />

                <Button btnName={"SIGN IN/ SIGN UP"} myBtnClass={classes.signInBtn} />
            </div>

            <span className={classes.spanHorizontalLine}></span>

            <span className={classes.footerSpan}>DROP US A LINE | 01617583</span>
        </section>
    )
}

export default MobileNav
