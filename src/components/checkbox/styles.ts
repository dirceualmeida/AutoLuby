import theme from "../../config/theme";
import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle
`;

export const Checkbox = styled.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{checked:boolean}>`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid ${theme.colors.gray1} !important;
`;

