import React from 'react'
import classes from './FooterOptionItem.module.css'

export default function FooterOptionItem(props) {
    return (
        <li className={classes.footerList}>
            <a href={props.link}>
                {props.itemName}
            </a>
        </li>
    )
}
