import React from 'react'
import Slider from 'react-slick';

import "./slick.css";
import "./slick-theme.css"
// import classes from './BestsellerSlider.module.css'
import BestsellerCard from './BestsellerCard'

import assamImg from '../../../Images/bestSellerCard/bestsellerImgAssam.webp'
import decafCeylon from '../../../Images/bestSellerCard/bestSellerDecafCeylon.webp'
import decafEarlGrey from '../../../Images/bestSellerCard/bestSellerDecafEarlGrey.webp'
import earlGrey from '../../../Images/bestSellerCard/bestSellerEarlGrey.webp'
import malty from '../../../Images/bestSellerCard/bestsellerImgMalty.webp'

export default function BestsellerSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true, // Add this line to enable autoplay
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="card-1">
                    {<BestsellerCard cardImg={assamImg} itemName={"ASSAM"} cardDesc={"Bold & Rich"} bgColor={'#da432f'} cardPrice={8.50}
                    />}
                </div>
                <div className="card-2">
                    {<BestsellerCard cardImg={malty} itemName={"ENGLISH BREAKFAST"} cardDesc={"Strong & Malty"} bgColor={'#fbb144'} cardPrice={6.00}
                    />}
                </div>
                <div className="card-3">
                    {<BestsellerCard cardImg={earlGrey} itemName={"EARL GREY"} cardDesc={"Light & Fragment"} bgColor={'#BB9EB2'} cardPrice={6.00}
                    />}
                </div>
                <div className="card-4">
                    {<BestsellerCard cardImg={decafCeylon} itemName={"DECAFEINATED CEYLON"} cardDesc={"Fruity & Earthy"} bgColor={'#8881D3'} cardPrice={6.00}
                    />}
                </div>
                <div className="card-5">
                    {<BestsellerCard cardImg={decafEarlGrey} itemName={"DECAFEINATED EARL GREY"} cardDesc={"Fresh & Citrusy"} bgColor={'#8FA4E3'} cardPrice={8.50}
                    />}
                </div>

            </Slider>
        </div>

    )
}
