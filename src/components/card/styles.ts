import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 212px;
  width: 826px;
  border: 1px solid #E6E6E6;
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
  margin-bottom: 32px;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  padding: 32px;

  p:nth-child(1) {
    font-weight: 600;
    font-size: 26px;
    text-align: left;
    margin-block-start: 0px;
    margin-block-end: 10px;
  }

  p:nth-child(2) {
    font-weight: 500;
    font-size: 18px;
    text-align: left;
    margin-block-start: 0px;
    margin-block-end: 10px;
  }

  p:nth-child(3) {
    display: table-cell;
    vertical-align: bottom;
    text-align: right;
    color: #F54A48;
    font-size: 16px;
    font-weight: 600;
    margin-top: 64px;
  }
`;

export const PictureContainer = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid #E6E6E6;
`;