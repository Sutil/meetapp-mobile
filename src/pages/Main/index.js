import React, { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Background from '../../components/Background';
import Header from '../../components/Header';

import DateSelector from '../../components/DateSelector';
import {
  Container,
  Button,
  ButtonText,
  MeetList,
  Meet,
  MeetImage,
  MeetInfos,
  MeetTitle,
  MeetText,
} from '../../components/global';
import api from '../../services/api';

export default function Main() {
  const [meets, setMeets] = useState([]);
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(() => {
    return format(date, 'yyyy-MM-dd');
  }, [date]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`meetups/?page=1&date=${formattedDate}`);

      const list = response.data.map(m => {
        return {
          ...m,
          formattedDate: format(
            parseISO(m.date),
            "dd 'de' MMMM 'às' HH:mm'h'",
            { locale: pt }
          ),
        };
      });

      setMeets(list);
    }

    loadMeetups();
  }, [date]);

  function onDateChange(newDate) {
    setDate(newDate);
  }

  async function handleSubscription(meetup) {
    try {
      await api.post('subscription', { meetup_id: meetup.id });
      Alert.alert('Sucesso', `Você está inscrito em '${meetup.title}'`);
    } catch (err) {
      Alert.alert('Erro', JSON.stringify(err.response.data.error));
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateSelector onChange={onDateChange} />
        <MeetList
          data={meets}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meet>
              <MeetImage source={{ uri: item.image.url }} />
              <MeetInfos>
                <MeetTitle>{item.title}</MeetTitle>
                <MeetText>{item.formattedDate}</MeetText>
                <MeetText>{item.location}</MeetText>
                <MeetText>Organizador: {item.organizer.name}</MeetText>
                <Button onPress={() => handleSubscription(item)}>
                  <ButtonText>Realizar inscrição</ButtonText>
                </Button>
              </MeetInfos>
            </Meet>
          )}
        />
      </Container>
    </Background>
  );
}

Main.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
