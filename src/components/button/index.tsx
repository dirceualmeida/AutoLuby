import React, {ButtonHTMLAttributes} from "react";
import {InputContainer} from "./styles";


const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
    return (
      <InputContainer type="button" {...props}>
        {children}
      </InputContainer>
    );
} 

export default Button;