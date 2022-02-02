import React, {InputHTMLAttributes, useEffect, useRef} from "react";
import {InputContainer, InputLabel, InputStyle} from "./styles";
import {IconBaseProps} from "react-icons";
import {FiAlertCircle} from "react-icons/fi";
import {useField} from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    placeholder: string
    title: string
}

const Input: React.FC<InputProps> = ({name, placeholder, title, type, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {fieldName, error, registerField, defaultValue} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    },[fieldName, registerField])

    return (
        <InputContainer>
            <InputLabel htmlFor="input-wrapper">{title}</InputLabel>
            <InputStyle ref={inputRef} defaultValue={defaultValue} placeholder={placeholder} type={type} {...rest}></InputStyle>
        </InputContainer>
    );
} 

export default Input;