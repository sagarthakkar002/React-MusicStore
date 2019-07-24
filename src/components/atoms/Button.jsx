import React from 'react'

const Button = (props) => {
    return (
        <>
            <button
                onClick={props.changeclick}
                id={props.id}>
                {props.title}
            </button>
        </>
    )
}
export default Button
