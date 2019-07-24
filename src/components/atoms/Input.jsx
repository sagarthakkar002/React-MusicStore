import React from 'react'
const Input = (props) => {
    return (
        <>
            <input name={props.name} id={props.idName} type={props.inputType} min={props.minNo}
                value={props.value} onBlur={props.validatehandle}
                onChange={props.handleChange} placeholder={props.placeVal} required/>
        </>

    )
}
export default Input