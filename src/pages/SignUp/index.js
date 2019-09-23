import React from 'react';

import { Container } from './styles';
import Background from '../../components/Background';

import {
  Logo,
  Input,
  Button,
  ButtonText,
  LinkButton,
  LinkButtonText,
} from '../../components/global';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo />
        <Input placeholder="Nome completo" />
        <Input placeholder="Digite seu e-mail" />
        <Input placeholder="Sua senha secreta" />
        <Button>
          <ButtonText>Criar conta</ButtonText>
        </Button>
        <LinkButton onPress={() => navigation.goBack()}>
          <LinkButtonText>Já tenho login</LinkButtonText>
        </LinkButton>
      </Container>
    </Background>
  );
}

SignUp.navigationOptions = {
  header: null,
};
