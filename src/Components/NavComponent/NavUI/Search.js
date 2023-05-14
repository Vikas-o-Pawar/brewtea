import {React, useState} from 'react'
import classes from './Search.module.css'

export default function Serach(props) {
  const [inputText, setInputText] = useState('');

  function ChangeInputHandler(event) {
    setInputText(event.target.value)
  }

  const cancelBtnHandler = () => {
    setInputText('')
  }

  return (
    <div>
      <input type="text" placeholder={props.placeholder} value={inputText} onChange={ChangeInputHandler} className={classes.searchInput} 
      />
      {inputText.length > 0 && <button onClick={cancelBtnHandler} className={classes.cancelBtn}>X</button>}
    </div>
  )
}
