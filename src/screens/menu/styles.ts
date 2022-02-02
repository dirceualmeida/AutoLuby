import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: ${theme.sizes.lg};
  font-weight: ${theme.fontWeight.default};
  color: ${theme.colors.black};
  margin-block-start: 0.67em;
  margin-block-end: 6px;
  text-align: left;
  align-self: self-start;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.paragraph};
  font-weight: ${theme.fontWeight.default};
  color: ${theme.colors.gray};
  text-align: left;
  margin-block-start: 0px;
  margin-block-end: 1em;
  margin-bottom: ${theme.sizes.xxlg};
  align-self: self-start;
`;