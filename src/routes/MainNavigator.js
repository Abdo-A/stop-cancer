import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'native-base';
import React from 'react';

import { colors } from '../assets/styles/base';
import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator(
  {
    Tab: TabNavigator
  },
  {
    initialRouteName: 'Tab',

    defaultNavigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let headerTitle = '';
      let headerRight = '';
      let headerLeft = '';
      let headerStyle = {
        backgroundColor: colors.secondary
      };
      let headerTitleStyle = {
        color: colors.white
      };
      let tabBarVisible = true;
      //and so on...

      //For each screen:
      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        if (tabScreen === 'E3raf') {
          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            >
              اعرف احنا بنعمل ايه 👀
            </Text>
          );
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        if (tabScreen === 'Etwasel') {
          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            >
              اتواصل معانا 🙋‍♂️
            </Text>
          );
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        if (tabScreen === 'E3rafna') {
          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            >
              اعرف احنا مين 💃
            </Text>
          );
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        // Return these in case of tab screens
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle
          // and so on..
        };
      }

      // Return these for other screens
      return {
        headerStyle,
        headerTitleStyle
      };
    }
  }
);

export default createAppContainer(RootStack);
