import React from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

const LabeledInput=(props)=> {
    return (
        <div className="input-div">
            <Label forName={props.forName} title={props.title}></Label>
            <Input name={props.name} idName={props.idName} inputType={props.inputType} minNo={props.minNo}
                value={props.value} validatehandle={props.validatehandle}
                handleChange={props.handleChange} placeVal={props.placeVal} ></Input>
        </div>
    )
}
export default LabeledInput
