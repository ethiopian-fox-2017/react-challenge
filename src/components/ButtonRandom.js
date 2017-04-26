import React from 'react'

const ButtonRandom = (props) => {
  return (
    <button className="button is-link" onClick={props.getNewsAgain}>Get News Again</button>
  )
}

export default ButtonRandom
