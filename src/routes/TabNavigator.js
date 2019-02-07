import { createMaterialTopTabNavigator } from 'react-navigation';
import { Text } from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { colors, sizes } from '../assets/styles/base';
import E3raf from '../screens/E3raf/E3raf';
import E3rafna from '../screens/E3rafna/E3rafna';
import Etwasel from '../screens/Etwasel/Etwasel';

export default createMaterialTopTabNavigator(
  {
    E3raf: {
      screen: E3raf,
      //--specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: 'اعرف',
        tabBarIcon: ({ tintColor }) => (
          <MIcon name="glasses" size={24} color={tintColor} />
        )
      }
    },
    Etwasel: {
      screen: Etwasel,
      navigationOptions: {
        tabBarLabel: 'اتواصل',
        tabBarIcon: ({ tintColor }) => (
          <FIcon name="commenting-o" size={24} color={tintColor} />
        )
      }
    },
    E3rafna: {
      screen: E3rafna,
      navigationOptions: {
        tabBarLabel: 'اعرفنا',
        tabBarIcon: ({ tintColor }) => (
          <IonIcon name="ios-people" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    // Config

    initialRouteName: 'Etwasel',
    order: ['E3rafna', 'Etwasel', 'E3raf'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primary,
        height: sizes.bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: '#00000000'
      },
      labelStyle: {
        fontSize: 18
      },
      iconStyle: {},
      indicatorStyle: {
        backgroundColor: colors.secondary
      }
    }
  }
);

const Hi = () => {
  return <Text>Hi</Text>;
};
