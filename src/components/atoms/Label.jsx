import React from 'react'

const Label=(props)=> {
    return (
        <>
            <label htmlFor={props.forName}>{props.title}</label>
        </>
    )
}

export default Label
