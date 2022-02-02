import theme from "../../config/theme";
import styled from "styled-components";

export const InputContainer = styled.button`
    display: flex;
    background-color: ${theme.colors.primary};
    border-radius: 3px;
    height: 37px;
    width: 100%;
    align-items: center;
    border-color: transparent;
    justify-content: center;
    color: ${theme.colors.white};
    cursor: pointer;
    transtion: background-color: 0.2s;
    &:hover{background: #F54A48};
    `;
