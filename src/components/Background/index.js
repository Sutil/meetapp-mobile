import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {lighten} from 'polished';

import colors from '../../styles/colors';

export default styled(LinearGradient).attrs({
  colors: [colors.primary, colors.purple],
})`
  flex: 1;
`;
