import theme from "../../config/theme";
import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 425px;
    align-content: flex-start;
`;

export const InputLabel = styled.label`
    font-size: ${theme.fontSizes.label};
    font-weight: ${theme.fontWeight.default};
    margin-bottom: ${theme.sizes.xsm};
    color: ${theme.colors.gray3};


`;

export const InputStyle = styled.input`
    font-size: ${theme.fontSizes.paragraph};
    font-weight: ${theme.fontWeight.sm};
    background-color: ${theme.colors.white1};
    height: ${theme.sizes.lg};
    border: 1px solid #E6E6E6;
    border-radius: 3px;
    padding-left: 16px;
    margin-bottom: ${theme.sizes.lg};
    ::-webkit-input-placeholder {
        color: ${theme.colors.gray};
    }

    &:focus {
        outline: 1px solid ${theme.colors.primary};
    }

    :-moz-placeholder {}

    ::-moz-placeholder {}

    :-ms-input-placeholder {}
`;


