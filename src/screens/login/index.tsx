import React, { useCallback, useRef, useState } from "react";
import * as Yup from "yup";
import Input from "../../components/input/index";
import Button from "../../components/button/index";
import { Background, Container, ContainerBackground, StyledForm, FormContainer, Subtitle, Title } from "./styles";
import {Form} from "@unform/web";
import {FormHandles} from "@unform/core";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../hooks/auth-context";
import getValidationErrors from "../../utils/get-validation-errors";

interface Login {
  email: string
  password: string
}

const LoginScreen: React.FC = ({}) => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();
  const handleSubmit = useCallback(async (data:Login) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
        .required("Digite um email")
        .email("Email inválido"),
        password: Yup.string()
        .required("Digite uma senha")
      });
      await schema.validate(data, {
        abortEarly: false
      });
      console.log('entrei aqui1');
      const {email, password} = data;
      
     
      await signIn({email, password});
      
  
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      } 
    }
  },[signIn]);
  
    return (
      <Container>
        <FormContainer>
          <StyledForm>
            <Title>Bem-vindo à AutoLuby</Title>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Subtitle>Faça login para acessar sua conta.</Subtitle>
              <Input name="email" placeholder="@mail.com" title="Endereço de e-mail" type="text"/>
              <Input name="password" placeholder="senha" title="Senha" type="password"/> 
              <div className="checkboxContainer">
                <div className="checkbox">
                  <input type="checkbox" className="checkboxInput"/> 
                  <label className="labelCheckbox">Lembrar minha senha</label>
                </div>
                <a href="" className="forgotPassword">Esqueceu a senha?</a>
              </div>
              <Button type="submit">Entrar</Button>
            </Form>
          </StyledForm>
        </FormContainer>
        
        <ContainerBackground>
          <Background />
        </ContainerBackground>
      </Container>
    );
} 

export default LoginScreen;