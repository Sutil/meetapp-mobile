import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Header from '../../components/Header';
import { Separator } from './styles';
import { Container, Input, Button, ButtonText } from '../../components/global';

export default function Profile() {
  return (
    <Background>
      <Header />
      <ScrollView>
        <Container>
          <Input placeholder="Nome completo" />
          <Input placeholder="Seu e-mail" />

          <Separator />

          <Input placeholder="Senha atual" />
          <Input placeholder="Nova senha" />
          <Input placeholder="confirme sua senha" />

          <Button>
            <ButtonText>Salvar perfil</ButtonText>
          </Button>

          <Button warn>
            <ButtonText>Sair do Meetapp</ButtonText>
          </Button>
        </Container>
      </ScrollView>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
