import React from 'react'

export default function ratingStarComp(props) {
  const myStyle = {
    color: "#fdd144"
  }

  return (
    <span className={props.dynamicStarClass} style={myStyle}>
         &#9733;
    </span>
  )
}
