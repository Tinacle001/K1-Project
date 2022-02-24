import React, { useState } from 'react'
import { Add, AddCircleOutlined } from '@material-ui/icons'
import './question.css'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
const Question = (props) => {
  const [show, setShow] = useState(false)
  const [button, setButton] = useState(true)
  let btn
  const handleClick = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  const { id, title, info } = props
  return (
    <>
      <header>
        <h5 className='title'>{title}</h5>
        <button className='button' onClick={handleClick}>
          {show ? <faMinus /> : <Add />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </>
  )
}

export default Question
