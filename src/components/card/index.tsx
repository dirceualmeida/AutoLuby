import React, { ButtonHTMLAttributes } from "react";
import {Container, TextContainer, PictureContainer} from "./styles";
import { useHistory } from "react-router-dom";


interface CardProps {
    title: string;
    subtitle: string;
    dataName: string;
    dataNumber: any; 
    cardPicture: any;
    to?: string;
}

const Card: React.FC<CardProps> = ({title, subtitle, dataNumber, cardPicture, to, dataName}) => {
  const history = useHistory();

    return (
      <Container onClick={()=> {history.push(`${to}`)}}>
        <TextContainer>
          <p>{title}</p>
          <p>{subtitle}</p>
          <p>{`${dataNumber} ${dataName}`}</p>
        </TextContainer>
        <PictureContainer>
          <img src={cardPicture} alt="" />
        </PictureContainer>
      </Container>
    );
};

export default Card