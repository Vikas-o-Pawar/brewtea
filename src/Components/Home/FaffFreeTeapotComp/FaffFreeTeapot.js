import React, { useContext } from 'react'
import classes from './FaffFreeTeapot.module.css'
import faffImg1 from '../../../Images/FaffFreeTeapot/faffTeapotImg1.webp'
import faffImg2 from '../../../Images/FaffFreeTeapot/faffTeapotImg2.webp'
import faffImgGif from '../../../Images/FaffFreeTeapot/faffTeapotGif.webp'
import RatingStarComp from '../HomeMiniComps/RatingStarComp'
import Button from '../../ButtonComponent/Button'
import { useState } from 'react'
import FaffFreeTeapotColor from './FaffFreeTeapotColor'
import CartContext from '../../Context-Page1/Cart-Context'

function FaffFreeTeapot(props) {
    const [quantityNum, setQuantityNum] = useState(1);
    const [activeColor, setActiveColor] = useState('');
    const cartCtx = useContext(CartContext);
    const myStar = <RatingStarComp />


    const addQuantityHandler = () => {
        setQuantityNum(prevQuan => prevQuan + 1);
    }

    const removeQuantityHandler = () => {
        if (quantityNum > 1) {
            setQuantityNum(prevQuan => prevQuan - 1);
        }
    }

    const colorWhichClickedHandler = (color) => {
        setActiveColor(color);
    }



    const addToTrolleyHanlder = () => {
        if (activeColor != '') {
            let id;
            let currColorText;
            if (activeColor === "#FDCF46") {
                currColorText = "YELLOW";
                id = 11;
            }
            else if (activeColor === "rgb(234, 81, 72)") {
                currColorText = "ASSAM RED";
                id = 12;
            }
            else if (activeColor === "#000") {
                currColorText = "BLACK";
                id = 13;
            } else if (activeColor === "rgb(247, 173, 80)") {
                currColorText = "DARJEELING ORANGE";
                id = 14;
            } else if (activeColor === "rgb(136, 129, 211)") {
                currColorText = "DECAFFEINATED CEYLON PURPLE";
                id = 15;
            } else if (activeColor === "rgb(255, 126, 118)") {
                currColorText = "CORAL RED";
                id = 16;
            }

            cartCtx.addItem({
                id: id,
                itemDescMain: currColorText,
                itemDesc: "TEAPOT FOR ONE - KIT - ",
                itemQuantityMain: "here",
                itemQuantity: quantityNum,
                amount: 26,
                price: 26.00,
                activeColorCtx: activeColor
            })
        }
    }

    const colorArr = ["#FDCF46", "rgb(234, 81, 72)", "#000", "rgb(247, 173, 80)", "rgb(136, 129, 211)", "rgb(255, 126, 118)"]
    return (
        <section>
            <section className={classes.faffTeaPotMini}>
                <div className={classes['faff-ImgDiv']}>
                    <img src={faffImg1} className={classes.img1} alt="" />
                    <img src={faffImg2} className={classes.img2} alt="" />
                    <img src={faffImgGif} className={classes.img3Gif} alt="" />
                </div>

                <div className={classes['faff-SecDescription']}>
                    <div className={classes["faff-DescHeader"]}>
                        <h1>A faff-free teapot.</h1>
                        <p>TEAPOT FOR ONE</p>
                    </div>

                    <div className={classes['faffReviewDiv']}>
                        <span>For One - 400ml | {myStar} {myStar} {myStar} {myStar} {myStar}</span>
                    </div>


                    <div className={classes.faffDescPara}>
                        <p>Brewing tea should be simple and satisfying - so we redesigned the teapot from scratch. No mess, no faff, no need for a strainer (or doilies). Just loads of room for the leaves to release their flavour.</p>
                    </div>

                    <div className={classes.faffColorDiv}>
                        <p>Pick a colour: (double click)</p>
                    </div>

                    <div className={classes.colorDiv}>
                        {colorArr.map((item) => {
                            if (activeColor === item) {
                                return <FaffFreeTeapotColor bgColor={item} key={Math.random()} colorWhichClicked={colorWhichClickedHandler}
                                    clicked={true} />
                            } else {
                                return <FaffFreeTeapotColor bgColor={item} key={Math.random()} colorWhichClicked={colorWhichClickedHandler}
                                    clicked={false} />
                            }
                        })}
                    </div>

                    <div className={classes.mainQuantityDiv}>
                        <div className={classes.quantityDiv}>
                            <span id={classes.amountMainSpan}>£26.00</span>
                        </div>
                        <div className={classes.quantityBtnDiv}>
                            <div>
                                <span>Quantity</span>
                            </div>
                            <div className={classes.quantityBtnSubDiv}>
                                <button onClick={addQuantityHandler}>+</button>
                                <span>{quantityNum}</span>
                                <button onClick={removeQuantityHandler}>-</button>
                            </div>

                        </div>
                        <div className={classes.trolleyBtnDiv}>
                            <Button btnName={'ADD TO TROLLEY'} onClick={addToTrolleyHanlder} myBtnClass={classes.addToTrolleyBtn} />
                            <a href="/">Find Out More</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default FaffFreeTeapot
