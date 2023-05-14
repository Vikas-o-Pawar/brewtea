import React, { useState } from 'react'
import classes from './FaffFreeTeapotColor.module.css'

export default function FaffFreeTeapotColor(props) {
    const [style, setStyle] = useState({});

    const myStyle = {
        backgroundColor: props.bgColor,
    }

    const activateColorHandler = () => {
        // console.log("This")
        if(props.clicked) {
            setStyle(prevStyle => ({...prevStyle, backgroundColor: "black"}));
        }
        props.colorWhichClicked(props.bgColor);
    }

    return (
        <div className={classes.mainColoredDiv}>
            <div className={classes.outwardBorder} onClick={activateColorHandler} style={style}>
                <div className={classes.colorBatch} style={myStyle}>

                </div>
            </div>
        </div>
    )
}
