import React from 'react'
import WebHeaderSlider from '../NavComponent/WebHeader/WebHeaderSlider'
import Navbar from '../NavComponent/Navbar'
import WebHomeSubscription from '../Home/WebHomeSubscription'
import WebHomeGridSection from '../Home/WebHomeGridSection'
import StartWithClassic from '../Home/StartWithClassic'
import SetUpSubscription from '../Home/SetUpSubscriptionComp/SetUpSubscription'
import Bestsellers from '../Home/BestsellersComp/Bestsellers'
import FaffFreeTeapot from '../Home/FaffFreeTeapotComp/FaffFreeTeapot'
import TeaReview from '../Home/TeaReviewComp/TeaReview'
import BrewCoins from '../Home/BrewCoinsComp/BrewCoins'
import WebFooter from '../Home/WebFooterComp/WebFooter'

function WebPage1() {
    return (
        <>
            <WebHeaderSlider />
            <Navbar />
            <WebHomeSubscription />
            <WebHomeGridSection />
            <StartWithClassic />
            <SetUpSubscription />
            <Bestsellers />
            <FaffFreeTeapot />
            <TeaReview />
            <BrewCoins />
            <WebFooter />
        </>
    )
}

export default WebPage1
