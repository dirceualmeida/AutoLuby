import styled from "styled-components";
import theme from "../../config/theme";
import carroImg from "../../img/img-carro.png"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const StyledForm = styled.div`
  max-width: 425px;
  width: 100%;
  .checkbox{
    display: flex;
    align-items: center;
  }
  .checkboxInput { 
    -webkit-appearance: none;
    background-color: #fff;
    border: 1px solid ${theme.colors.gray1} !important;
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  input.checkboxInput:checked { 
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.gray1} !important;
    color: ${theme.colors.white};
  }

  .labelCheckbox { 
    font-weight: ${theme.fontWeight.default};
    color: ${theme.colors.primary};  
  }

  .forgotPassword { 
    font-weight: ${theme.fontWeight.md};
    color: ${theme.colors.primary};
    text-decoration: none;  
  }
  
  input.checkboxInput[type="checkbox"]:checked:after {
    content: '';
    position: absolute;
    width: 1.2ex;
    height: 0.4ex;
    background: rgba(0, 0, 0, 0);
    top: 0.9ex;
    left: 0.4ex;
    border: 3px solid white;
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .checkboxContainer{
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
  }
`;

export const Title = styled.h1`
  font-size: ${theme.sizes.lg};
  font-weight: ${theme.fontWeight.default};
  color: ${theme.colors.black};
  margin-block-start: 0.67em;
  margin-block-end: 6px;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.paragraph};
  font-weight: ${theme.fontWeight.default};
  color: ${theme.colors.gray};
  margin-block-start: 0px;
  margin-block-end: 1em;
  margin-bottom: ${theme.sizes.xxlg};
`;

export const ContainerBackground = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 50%;
`;

export const Background = styled.div`
  display: flex;
  background: url(${carroImg}) no-repeat center;
  width: 100%;
  height: 100%;
`;