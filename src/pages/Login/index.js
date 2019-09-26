import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
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

import { signInRequest } from '../../store/modules/auth/actions';

export default function Login({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Logo />
        <Input
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          placeholder="Sua senha secreta"
          onChangeText={setPassword}
          ref={passwordRef}
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>
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
