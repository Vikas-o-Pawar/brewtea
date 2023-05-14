import React from 'react'
import classes from './CarouselArrow.module.css'

export default function CarouselArrows(props) {
    return (
        <div>
            <div className={classes.mainArrowDiv}>
                <div className={classes.leftArrowDiv} onClick={props.onClick1}>
                    <div className={classes.leftArrowUp}>
                        <span className={classes.leftArrowOne}>|</span>
                    </div>
                    <div className={classes.leftArrowDown}>
                        <span className={classes.leftArrowTwo}>|</span>
                    </div>
                </div>

                <div className={classes.rightArrowDiv} onClick={props.onClick2} >
                    <div className={classes.rightArrowUp}>
                        <span className={classes.rightArrowOne}>|</span>
                    </div>
                    <div className={classes.rightArrowDown}>
                        <span className={classes.rightArrowTwo}>|</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

