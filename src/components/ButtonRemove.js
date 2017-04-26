import React from 'react'

const ButtonRemove = (props) => {
    return (
        <button className="button is-link" onClick={props.removeData}>Remove Data</button>
    )
}

export default ButtonRemove
