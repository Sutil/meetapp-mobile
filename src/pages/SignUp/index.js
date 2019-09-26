import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
    setSubmited(true);
  }

  useEffect(() => {
    if (!loading && !error && submited) {
      navigation.navigate('Login');
    }
    if (!loading && submited) {
      setSubmited(false);
    }
  }, [loading, error, submited]);

  return (
    <Background>
      <Container>
        <Logo />
        <Input
          placeholder="Nome completo"
          onChangeText={setName}
          returnKeyType="next"
          autoCapitalize="words"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => passwordRef.current.focus()}
          ref={emailRef}
        />
        <Input
          placeholder="Sua senha secreta"
          onChangeText={setPassword}
          returnKeyType="send"
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <ButtonText>Criar conta</ButtonText>
          )}
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
