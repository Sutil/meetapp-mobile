import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Header from '../../components/Header';
import { Separator } from './styles';
import { Container, Input, Button, ButtonText } from '../../components/global';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirPassworRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Header />
      <ScrollView>
        <Container>
          <Input
            placeholder="Nome completo"
            autoCapitalize="words"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <Input
            placeholder="Seu e-mail"
            ref={emailRef}
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />

          <Separator />

          <Input
            placeholder="Senha atual"
            ref={oldPasswordRef}
            secureTextEntry
            returnKeyType="next"
            value={oldPassword}
            onChangeText={setOldPassword}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input
            placeholder="Nova senha"
            ref={passwordRef}
            secureTextEntry
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => confirPassworRef.current.focus()}
          />
          <Input
            placeholder="confirme sua senha"
            ref={confirPassworRef}
            secureTextEntry
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={setConfirPassword}
            onSubmitEditing={handleSubmit}
          />

          <Button onPress={handleSubmit}>
            <ButtonText>Salvar perfil</ButtonText>
          </Button>

          <Button warn onPress={handleSignOut}>
            <ButtonText>Sair do Meetapp</ButtonText>
          </Button>
        </Container>
      </ScrollView>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
