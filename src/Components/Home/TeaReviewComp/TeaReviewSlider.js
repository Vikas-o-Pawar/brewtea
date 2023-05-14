import { React, useCallback } from 'react'
import Slider from 'react-slick';
import TeaReviewCard from './TeaReviewCard';

import "./slick.css";
import "./slick-theme.css"
// import classes from './BestsellerSlider.module.css'
import assamImg from '../../../Images/bestSellerCard/bestsellerImgAssam.webp'
import decafCeylon from '../../../Images/bestSellerCard/bestSellerDecafCeylon.webp'
import decafEarlGrey from '../../../Images/bestSellerCard/bestSellerDecafEarlGrey.webp'
import earlGrey from '../../../Images/bestSellerCard/bestSellerEarlGrey.webp'
import malty from '../../../Images/bestSellerCard/bestsellerImgMalty.webp'
import CarouselArrows from './CarouselArrows';

export default function BestsellerSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, // Add this line to enable autoplay
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

    const sliderRef = useCallback((node) => {
        if (node !== null) {
            sliderRef.current = node;
        }
    }, []);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const reviewObj = {
        person1: {
            review: "A lovely green tea, it's not bitter like most green teas and is very enjoyable! Thank you Brew Tea Company, this is the first green tea that I'v actually enjoyed",
            name: "MARIE D",
            item: "Yunnan Green - Loose Leaf Tea",
            img: assamImg
        },
        person2: {
            review: "I start every day with a cup and this delicious mint tea.I use subscribe and save so I never run out and I am never disappointed with the tea I received.",
            name: "MICHAEL G.",
            item: "Moroccan Mint - Loose Leaf Tea",
            img: decafCeylon
        },
        person3: {
            review: "Good value for money. Lovely fragrant flavour and just what I wanted.",
            name: "ZOE B.",
            item: "Earl Grey - Loose Leaf Tea",
            img: earlGrey
        },
        person4: {
            review: "Love Brew Tea Co. fantastic products and great value for money. I fully recommend them!",
            name: "STEVE M.",
            item: "English breakfast - Loose Leaf Tea",
            img: decafEarlGrey
        },
        person5: {
            review: "Scoop is perfect Delivers just the right amount of tea for me",
            name: "JAN C.",
            item: "Perfect Tea Scoop",
            img: malty
        }
    }
    return (
        <div>
            <Slider {...settings} ref={sliderRef}>
                {Object.entries(reviewObj).map((obj) => {
                    return <TeaReviewCard reviewMain={obj[1].review} userName={obj[1].name} userItem={obj[1].item} itemImg={obj[1].img} key={Math.random()} />
                })}
            </Slider>
            <CarouselArrows onClick1={handlePrev} onClick2={handleNext} />
        </div>

    )
}
