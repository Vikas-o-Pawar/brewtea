import React, { useState, useEffect, useRef, useContext } from 'react'
import classes from './StartWithClassic.module.css'
import RatingStarComp from './HomeMiniComps/RatingStarComp'
import classicImg1 from '../../Images/startWithClassic/StartWithClassicImg-1.webp'
import classicImg2 from '../../Images/startWithClassic/StartWithClassicImg-2.webp'
import classicImg3 from '../../Images/startWithClassic/StartWithClassicImg-3webp.webp'
import ClassicNormalBtn from './HomeMiniComps/ClassicNormalBtn'
import Button from '../ButtonComponent/Button'
import SimpleSlider from '../Carousel/SimpleSlider'
import CartContext from '../Context-Page1/Cart-Context'

export default function StartWithClassic() {
    const [quantityNum, setQuantityNum] = useState(1);
    const [looseLeafTea, setLooseLeafTeaBtn] = useState(true);
    const [miniBtnTxt, setMiniBtnTxt] = useState('133g Box');
    const [itemPrice, setItemPrice] = useState(6);
    const quantityRef = useRef(null);

    // here I'm getting the 'loose leaf tea' or 'proper tea bags'
    const [getBtnContent, setGetBtnContent] = useState("Loose Leaf Tea");
    const ctx = useContext(CartContext);

    const [Carousel, setCarousel] = useState(
        window.matchMedia("(max-width: 320px)").matches
    );

    // This function updates the isMobile state when the screen size changes
    const handleWindowSizeChange = () => {
        setCarousel(window.matchMedia("(max-width: 757px)").matches);
    };

    // Register a listener to handle window size changes
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, []);

    const addQuantityHandler = () => {
        setQuantityNum(prevQuan => prevQuan + 1);
    }

    const removeQuantityHandler = () => {
        if (quantityNum > 1) {
            setQuantityNum(prevQuan => prevQuan - 1);
        }
    }

    const miniBtnHandler = (e) => {
        setMiniBtnTxt(e.target.innerText)
        if (e.target.innerText === "133g Box") {
            setItemPrice(6);
        } else if (e.target.innerText === "226g Box" || e.target.innerText === "150g Box + Tin" || e.target.innerText === "25 + Tin") {
            setItemPrice(10.99);
        } else if (e.target.innerText === "500g Box" || e.target.innerText === "100") {
            setItemPrice(20);
        } else if (e.target.innerText === "5 X 500g Box" || e.target.innerText === "5 X 100") {
            setItemPrice(85.00);
        } else if (e.target.innerText === "15") {
            setItemPrice(5.00);
        } else if (e.target.innerText === "40") {
            setItemPrice(8.99);
        } else if (e.target.innerText === "25 + Tin") {
            setItemPrice(10.99)
        }
    }

    function onProperTeaBtnHandler() {
        setGetBtnContent("Proper Tea Bags")
        setLooseLeafTeaBtn(prevBool => false);
    }

    function onLooseLeafBtnHandler() {
        setGetBtnContent("Loose Leaf Tea")
        setLooseLeafTeaBtn(prevBool => true);
    }


    const teaArr = ['133g Box', '226g Box', '150g Box + Tin', '500g Box', '5 X 500g Box']
    const teaBagArr = ['15', '40', '25 + Tin', '100', '5 x 100']

    const addToTrolleyBtnHandler = () => {
        const itemQuantity = quantityRef.current.innerText;
        const itemQuantityNum = +itemQuantity;
        let id;
        if (miniBtnTxt === "133g Box") {
            id = 1;
        } else if (miniBtnTxt === "226g Box") {
            id = 2;
        } else if (miniBtnTxt === "150g Box + Tin") {
            id = 3;
        } else if (miniBtnTxt === "500g Box") {
            id = 4;
        } else if (miniBtnTxt === "5 X 500g Box") {
            id = 5;
        } else if (miniBtnTxt === "15") {
            id = 6;
        } else if (miniBtnTxt === "40") {
            id = 7;
        } else if (miniBtnTxt === "25 + Tin") {
            id = 8;
        } else if (miniBtnTxt === "100") {
            id = 9
        } else if (miniBtnTxt === "5 x 100") {
            id = 10;
        }
        ctx.addItem({
            id: id,
            itemDescMain: "ENGLISH BREAKFAST", 
            itemDesc: getBtnContent,
            itemQuantityMain: miniBtnTxt,
            itemQuantity: itemQuantityNum,
            amount: itemPrice,
            price: itemPrice,
            activeColorCtx: ""
        });
    }


    const myStar = <RatingStarComp dynamicStarClass={classes.starClass} />
    let activeBtnBgColor = looseLeafTea === true ? classes.activeBtn : '';
    let activeBtnBgColorTwo = looseLeafTea === false ? classes.activeBtn : '';
    let rightDiv = <div className={classes.rightClassicMainDiv}>
        <div className={classes['rightClassic-Div']}>
            <img src={classicImg2} className={classes.img2Class} alt="" />
            <img src={classicImg1} className={classes.img1Class} alt="" />
            <div className={classes.minirightClassDiv}>
                <span> <b>Tastes</b> Malty, Earthy, Rich</span>
                <span><b>From</b> India, Sri Lanka</span>
            </div>

            <img src={classicImg3} className={classes.img3Class} alt="" />
        </div>
    </div>

    // npm install react-slick --save
    return (
        <section className={classes.mainClassicSection}>
            <section className={classes.mainClassicSectionMini}>

                <div className={classes['leftClassic-Div']}>
                    <div className={classes.classicTextDiv}>
                        <h1>Start With a Classic.</h1>
                        <h3>ENGLISH BREAKFAST</h3>

                        <span id={classes.strongMaltySpan}>Strong & Malty  </span>
                        <span id={classes.reviewSpan}>| {myStar} {myStar} {myStar} {myStar} {myStar} 2689 Reviews</span>
                        <p>
                            The tea that started it all, and still our bestseller. A proper English Breakfast tea made from rolled whole leaves. Drink it strong or light. With or without milk. Whenever you want.
                        </p>
                    </div>

                    <div className={classes.teaSection}>
                        <div className={classes['teaSec-1']}>
                            <h4>Loose Leaf Or Tea Bags?</h4>
                            <ClassicNormalBtn classicBtnName={'Loose Leaf Tea'} onClick={onLooseLeafBtnHandler} inheritedClass={activeBtnBgColor} />
                            <ClassicNormalBtn onClick={onProperTeaBtnHandler} classicBtnName={'Proper Tea Bags'} inheritedClass={activeBtnBgColorTwo} />

                        </div>

                        <div className={classes['teaSec-2']}>
                            <h4>How Much Tea?</h4>
                            {looseLeafTea &&
                                teaArr.map(item => {
                                    if (item === miniBtnTxt) {
                                        return <ClassicNormalBtn key={Math.random()} classicBtnName={item} onClick={miniBtnHandler}
                                            inheritedClass={classes.activeBtn} />
                                    } else {
                                        return <ClassicNormalBtn key={Math.random()} classicBtnName={item} onClick={miniBtnHandler}
                                        />
                                    }
                                })
                            }

                            {(!looseLeafTea) &&
                                teaBagArr.map(item => {
                                    if (item === miniBtnTxt) {
                                        return <ClassicNormalBtn key={Math.random()} classicBtnName={item} onClick={miniBtnHandler}
                                            inheritedClass={classes.activeBtn} />
                                    } else {
                                        return <ClassicNormalBtn key={Math.random()} classicBtnName={item} onClick={miniBtnHandler}
                                        />
                                    }
                                })
                            }


                            <div className={classes.mainQuantityDiv}>
                                <div className={classes.quantityDiv}>
                                    <span id={classes.amountMainSpan}>£{itemPrice.toFixed(2)}</span>
                                </div>
                                <div className={classes.quantityBtnDiv}>
                                    <div>
                                        <span>Quantity</span>
                                    </div>
                                    <div className={classes.quantityBtnSubDiv}>
                                        <button onClick={addQuantityHandler}>+</button>
                                        <span ref={quantityRef}>{quantityNum}</span>
                                        <button onClick={removeQuantityHandler}>-</button>
                                    </div>

                                </div>
                                <div className={classes.trolleyBtnDiv}>
                                    <Button btnName={'ADD TO TROLLEY'} myBtnClass={classes.addToTrolleyBtn} onClick={addToTrolleyBtnHandler} />
                                    <a href="/">Find Out More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* {Carousel && <SimpleSlider /> || !Carousel && rightDiv} */}

                {Carousel ? <SimpleSlider /> : rightDiv}


            </section>
        </section>

    )
}
