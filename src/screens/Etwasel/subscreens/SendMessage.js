import { Textarea, Button, Input } from 'native-base';
import { View, Text } from 'native-base';
import React, { Component } from 'react';

import withImageOverlay from '../../../components/hoc/withImageOverlay/withImageOverlay';
import QuickNotification from '../../../components/QuickNotification/QuickNotification';

const send_message_background = require('../../../assets/images/send_message_background.jpg');

class SendMessage extends Component {
  state = {
    writer: '',
    text: ''
  };

  onSend = () => {
    const { navigation } = this.props;
    const postMessage = navigation.getParam('postMessage', () => {});
    if (!this.state.writer) {
      QuickNotification('فين اسمك؟');
    } else if (!this.state.text) {
      QuickNotification('فين رسالتك؟');
    } else {
      postMessage(this.state.writer, this.state.text);
      navigation.goBack();
    }
  };

  render() {
    return (
      <View style={{ paddingHorizontal: 30 }}>
        <View>
          <Input
            placeholder="اسمك"
            style={{
              backgroundColor: '#ffffffc7',
              marginTop: 100,
              marginBottom: 100
            }}
            onChangeText={(t) => this.setState({ writer: t })}
          />
        </View>
        <View>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="رسالتك"
            style={{ backgroundColor: '#ffffffc7' }}
            onChangeText={(t) => this.setState({ text: t })}
          />
        </View>

        <Button
          onPress={this.onSend}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            width: '40%',
            height: 40,
            justifyContent: 'center'
          }}
        >
          <Text>Send</Text>
        </Button>
      </View>
    );
  }
}

export default withImageOverlay(SendMessage, send_message_background);
