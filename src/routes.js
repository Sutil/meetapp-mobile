import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import colors from './styles/colors';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Subscriptions from './pages/Subscriptions';
import Profile from './pages/Profile';

const AuthStack = createStackNavigator({
  Login,
  SignUp,
});

const AppStack = createBottomTabNavigator(
  {
    Main,
    Subscriptions,
    Profile,
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255,255,255,0.6)',
      style: {
        backgroundColor: colors.secondary,
      },
    },
  }
);

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        AuthStack,
        AppStack,
      },
      {
        initialRouteName: isSigned ? 'AppStack' : 'AuthStack',
      }
    )
  );
