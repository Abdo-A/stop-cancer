import { View, Text } from 'native-base';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import withImageOverlay from '../../../components/hoc/withImageOverlay/withImageOverlay';

const send_message_background = require('../../../assets/images/send_message_background.jpg');

class SendMessage extends Component {
  static navigationOptions = () => ({
    headerRight: (
      <Text style={{ marginRight: 20, fontSize: 30, color: colors.secondary }}>
        😅 😅 😅
      </Text>
    ),
    headerStyle: {
      backgroundColor: colors.primary
    }
  });

  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}

export default withImageOverlay(SendMessage, send_message_background);
