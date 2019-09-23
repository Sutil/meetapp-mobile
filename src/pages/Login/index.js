import React from 'react';
import Background from '../../components/Background';

import { Container } from './styles';

import {
  Logo,
  Input,
  Button,
  ButtonText,
  LinkButton,
  LinkButtonText,
} from '../../components/global';

export default function Login({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo />
        <Input placeholder="Digite seu e-mail" />
        <Input placeholder="Sua senha secreta" />
        <Button onPress={() => navigation.navigate('AppStack')}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <LinkButton onPress={() => navigation.navigate('SignUp')}>
          <LinkButtonText>Criar conta grátis</LinkButtonText>
        </LinkButton>
      </Container>
    </Background>
  );
}

Login.navigationOptions = {
  header: null,
};
