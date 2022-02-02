import React, {useState, useCallback} from "react";
import {CheckboxContainer, Checkbox, StyledCheckbox} from "./styles";

interface InputProps {
    checked: boolean
    onChange: (event:any) => void
    props?:any[]
}

const Input: React.FC<InputProps> = ({checked, onChange, ...props}) => {

    return (
        <CheckboxContainer>
           
            <Checkbox onChange={onChange} checked={true} {...props}/>
        </CheckboxContainer>
    );
} 

export default Input;