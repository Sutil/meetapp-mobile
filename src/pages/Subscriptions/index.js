import React from 'react';
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

export default function Subscriptions() {
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
                <Button warn>
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
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
