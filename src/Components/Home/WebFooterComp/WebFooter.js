import React from 'react'
import airplaneImg from '../../../Images/FooterSec/footerAirPlaneIcon.svg'
import Button from '../../ButtonComponent/Button'
import classes from './WebFooter.module.css'
import FooterOptionItem from './FooterOptionItem'
import instagramIcon from '../../../Images/FooterLogo/5279112_camera_instagram_social media_instagram logo_icon.png'
import FBIcon from '../../../Images/FooterLogo/104458_facebook_social media_fb_social_icon.png'

export default function WebFooter() {
    return (
        <section className={classes.mainFooterSection}>

            <div className={classes.footerHeaderPart}>
                <div className={classes["footerHeader-MainHeader"]}>
                    <h1>Get with the brew times.</h1>
                </div>

                <div className={classes.footerAirplaneDiv}>
                    <img src={airplaneImg} alt="" />
                </div>

                <div className={classes.userFooterDiv}>
                    <div className={classes.userInputDiv}>
                        <input type="text" className={classes.userInput} placeholder='Put your email address here' />
                        <Button btnName={"SIGN UP"} myBtnClass={classes.signUpBtn} />
                    </div>

                    <div className={classes.footerUserDivDesc}>
                        <span>The Brew Times comes out every week or so. It's brimming with news, launches, ways to earn Brew Coins and is the only way to get access to any of our sales.</span>
                    </div>
                </div>
            </div>

            <div className={classes.horizontalLineGray}>

            </div>


            <div className={classes["footerNav-Main"]}>

                <div className="brewTeaNavFooter">
                    <div className="brewNavHeader">
                        <h1>BREW TEA CO</h1>
                    </div>

                    <div className={classes.brewTeaNavSpan}>
                        <span>© Brew Tea Co. 2020.</span>
                    </div>

                    <div className={classes["brewSocial-MediaIcon"]}>
                        <img src={instagramIcon} alt="" />
                        <img src={FBIcon} alt="" />
                    </div>
                </div>

                <div className={classes["navFooter-ShopDiv"]}>
                    <h2>Shop</h2>
                    <FooterOptionItem itemName={"Gift Shop"} />
                    <FooterOptionItem itemName={"Gifts & Sets"} />
                    <FooterOptionItem itemName={"Gifts Teapots & kit"} />
                    <FooterOptionItem itemName={"All Tea"} />
                    <FooterOptionItem itemName={"Subscription"} />
                </div>

                <div className={classes["navFooter-UsefulThingsDiv"]}>
                    <h2>USEFUL THINGS</h2>
                    <FooterOptionItem itemName={"Your Account"} />
                    <FooterOptionItem itemName={"Brew Coins"} />
                    <FooterOptionItem itemName={"About Us"} />
                    <FooterOptionItem itemName={"FAQs"} />
                    <FooterOptionItem itemName={"Stockists This Way"} />

                </div>

                <div className={classes["navFooter-OtherDiv"]}>
                    <h2>OTHER</h2>
                    <FooterOptionItem itemName={"Blog"} />
                    <FooterOptionItem itemName={"Privacy Policy"} />
                    <FooterOptionItem itemName={"Talk to Us"} />
                    <FooterOptionItem itemName={"Sitemap"} />

                </div>

                <div className={classes["getInTouch-CallUsDiv"]}>
                    <h2>Get In Touch</h2>
                    <FooterOptionItem itemName={"hello@brewteacompany.co.uk"} />

                    <h2>CALL US</h2>
                    <FooterOptionItem itemName={"0161 521 6310"} />
                    <FooterOptionItem itemName={"0161 637 9747"} />
                    <FooterOptionItem itemName={"08433 092 166"} />

                </div>
            </div>


        </section>
    )
}
