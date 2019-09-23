import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

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
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
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
