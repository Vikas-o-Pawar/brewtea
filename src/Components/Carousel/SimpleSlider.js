import React from 'react'
import Slider from 'react-slick';

import CarouselImg1 from '../../Images/startWithClassic/StartWithClassicImg-1.webp'
import CarouselImg2 from '../../Images/startWithClassic/StartWithClassicImg-2.webp'
import CarouselImg3 from '../../Images/startWithClassic/StartWithClassicImg-3webp.webp'
import "./slick.css";
import "./slick-theme.css"
import classes from './SimpleSlider.module.css'

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
                <div className={classes.img1Div}>
                    <img src={CarouselImg1} alt="" />
                </div>
                <div className={classes.img2Div}>
                    <img src={CarouselImg2} alt="" />
                </div>
                <div className={classes.img3Div}>
                    <img src={CarouselImg3} alt="" />
                </div>
            </Slider>
        </div>

    )
}
