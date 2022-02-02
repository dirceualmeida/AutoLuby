import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 150px;
`;

export const PageTitle = styled.p`
  width: 222px;
  font-weight: ${theme.fontWeight.default};
  font-size: ${theme.fontSizes.title};
  line-height: 45px;
  letter-spacing: -0.02em;
  color: #495057;
  padding: 40px 0;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;