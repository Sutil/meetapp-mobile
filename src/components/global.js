import styled from 'styled-components/native';
import colors from '../styles/colors';
import logo from '../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: ${props => (props.size ? props.size : 50)}px;
  height: ${props => (props.size ? props.size : 50)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.5)',
})`
  margin: 10px 0;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.2);
  height: 50px;
  width: 100%;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background: ${props => (props.warn ? colors.primaryDark : colors.primary)};
  width: 100%;
  height: 50px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const LinkButton = styled.TouchableOpacity`
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const LinkButtonText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
`;

export const MeetList = styled.FlatList`
  flex: 1;
  width: 100%;
  margin-top: 20;
`;

export const Meet = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const MeetImage = styled.Image`
  align-self: stretch;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const MeetInfos = styled.View`
  padding: 20px;
`;

export const MeetText = styled.Text`
  font-size: 13px;
  color: #999;
  margin: 5px 0 5px 5px;
`;

export const MeetTitle = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
