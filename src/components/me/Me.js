import { useState } from 'react'

const Me = ({ name, years }) => {
  const [position, setPosition] = useState(21)
  const [textButton, setTextButton] = useState(true)

  function changeTextButton() {
    setTextButton(!textButton)
  }
  function changePosition({ i }) {
    setPosition(position + i)
  }

  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>I am from {years}s </h1>
      <h1>I am {position}s on position </h1>
      <button className="Button" onClick={changePosition} i={1}>
        +++
      </button>
      <button className="Button" onClick={changePosition} i={-1}>
        ---
      </button>
      <button className="Button" onClick={changeTextButton}>
        {textButton ? 'Start' : 'Go!'}
      </button>
    </div>
  )
}

export default Me
