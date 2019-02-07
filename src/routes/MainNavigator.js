import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text, Button } from 'native-base';
import React from 'react';

import { colors } from '../assets/styles/base';
import Comics from '../screens/E3rafna/subscreens/Comics';
import SendMessage from '../screens/Etwasel/subscreens/SendMessage';
import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator(
  {
    Tab: TabNavigator,
    SendMessage: SendMessage,
    Comics: Comics
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
          headerLeft = (
            <Button
              onPress={() => navigation.navigate('Comics')}
              style={{ marginLeft: 20, marginTop: 10, height: 30 }}
            >
              <Text>شوف الكوميكس بتاعتنا</Text>
            </Button>
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

      if (screen === 'SendMessage') {
        (headerRight = (
          <Text
            style={{ marginRight: 20, fontSize: 30, color: colors.secondary }}
          >
            ابعتلنا
          </Text>
        )),
          (headerStyle = {
            backgroundColor: colors.primary
          });
      }

      if (screen === 'Comics') {
        (headerRight = (
          <Text
            style={{ marginRight: 20, fontSize: 30, color: colors.secondary }}
          >
            😅 😅 😅
          </Text>
        )),
          (headerStyle = {
            backgroundColor: colors.primary
          });
      }

      // Return these for other screens
      return {
        headerRight,
        headerStyle,
        headerTitleStyle
      };
    }
  }
);

export default createAppContainer(RootStack);
