import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import Header from '../../components/Header';
import { DateSelector } from './styles';
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

export default function Main() {
  const meets = [
    {
      id: 1,
      title: 'React Native Day',
      date: new Date(),
      address: 'Av. Pres. Juscelino Kubtschec, 355',
      organizer: 'Eduardo Sutil',
      image: 'https://www.bonde.com.br/img/bondenews/2019/03/img_1_69_4560.jpg',
    },
    {
      id: 2,
      title: 'React Native Day',
      date: new Date(),
      address: 'Av. Pres. Juscelino Kubtschec, 355',
      organizer: 'Eduardo Sutil',
      image:
        'https://i2.wp.com/eduardomarostica.com.br/wp-content/uploads/2018/06/como-a-palestra-de-atendimento-ao-cliente-pode-ajudar-a-sua-empresa.jpg?fit=3130%2C1746&ssl=1',
    },
  ];

  return (
    <Background>
      <Header />
      <Container>
        <DateSelector>31 de Maio</DateSelector>
        <MeetList
          data={meets}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meet>
              <MeetImage source={{ uri: item.image }} />
              <MeetInfos>
                <MeetTitle>{item.title}</MeetTitle>
                <MeetText>24 de Junho às 20h</MeetText>
                <MeetText>Avenida Brasil, 244</MeetText>
                <MeetText>Organizador: Eduardo Sutil</MeetText>
                <Button>
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
