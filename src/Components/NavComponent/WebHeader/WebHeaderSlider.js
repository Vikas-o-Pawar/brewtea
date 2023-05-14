import React from 'react'
import WebHeader from './WebHeader';
import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css"
import classes from './WebHeaderSlider.module.css'

export default function WebHeaderSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Add this line to enable autoplay
        autoplaySpeed: 3000,
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

    
    const span1Txt = `Free 24hour shipping for over £20. Free Shipping Courier over £75.`
    const span2Txt = `Same day dispatch on orders place before 5pm Mon-Fri.`
    const span3Txt = `Stockists This Way.`
    return (
        <div className={classes.mainSliderDiv}>
            <Slider {...settings} >
                <WebHeader spanHeaderName={span1Txt}  />
                <WebHeader spanHeaderName={span2Txt} />
                <WebHeader spanHeaderName={span3Txt} />
            </Slider>

        </div>
    )
}
