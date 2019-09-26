import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import Header from '../../components/Header';
import {
  Container,
  MeetList,
  Meet,
  MeetImage,
  MeetTitle,
  MeetText,
  MeetInfos,
  Button,
  ButtonText,
} from '../../components/global';
import api from '../../services/api';

function Subscriptions({ isFocused }) {
  const [meets, setMeets] = useState([]);

  async function loadMeetups() {
    try {
      const response = await api.get('subscription');

      const list = response.data.map(s => {
        return {
          subscriptionId: s.id,
          ...s.meetup,
          formattedDate: format(
            parseISO(s.meetup.date),
            "dd 'de' MMMM 'às' HH:mm'h'",
            { locale: pt }
          ),
        };
      });

      setMeets(list);
    } catch (err) {
      Alert.alert('Erro', `Falha ao listar inscrições`);
    }
  }

  useEffect(() => {
    loadMeetups();
  }, [isFocused]);

  async function handleCancel(meetup) {
    try {
      await api.delete(`subscription/${meetup.subscriptionId}`);
      Alert.alert('Erro', 'Inscrição cancelada');

      loadMeetups();
    } catch (err) {
      Alert.alert('Erro', err.response.data.error);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <MeetList
          data={meets}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meet>
              <MeetImage source={{ uri: item.image.url }} />
              <MeetInfos>
                <MeetTitle>{item.title}</MeetTitle>
                <MeetText>24 de Junho às 20h</MeetText>
                <MeetText>Avenida Brasil, 244</MeetText>
                <MeetText>Organizador: Eduardo Sutil</MeetText>
                <Button warn onPress={() => handleCancel(item)}>
                  <ButtonText>Cancelar inscrição</ButtonText>
                </Button>
              </MeetInfos>
            </Meet>
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
