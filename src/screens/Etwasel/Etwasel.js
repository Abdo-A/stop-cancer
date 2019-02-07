import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text, View, Button } from 'native-base';
import axios from 'axios';
import React, { Component } from 'react';

import { API_URL } from '../../keys';
import { colors } from '../../assets/styles/base';
import ContentCard from '../../components/Card/ContentCard';
import isEnglishCharacter from '../../assets/helpers/isEnglishCharacter';
import QuickNotification from '../../components/QuickNotification/QuickNotification';
import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

const etwasel_background = require('../../assets/images/etwasel_background.jpeg');

class Etwasel extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  state = {
    messages: [],
    isGettingMessages: false,
    isPostingMessage: false
  };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    this.setState(() => ({ isGettingMessages: true }));
    axios.get(`${API_URL}/api/message/all`).then((res) => {
      this.setState(() => ({ messages: res.data, isGettingMessages: false }));
    });
  };

  postMessage = (writer, text) => {
    this.setState(() => ({ isPostingMessage: true }));
    axios.post(`${API_URL}/api/message/new`, { writer, text }).then((res) => {
      QuickNotification('تمام ^_^');
      this.getMessages();
      this.setState(() => ({ isPostingMessage: false, postModalOpen: false }));
    });
  };

  render() {
    const { messages, isGettingMessages, isPostingMessage } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Button
          onPress={() =>
            navigation.navigate('SendMessage', {
              postMessage: this.postMessage
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>ابعتلنا</Text>
        </Button>

        {(isGettingMessages || isPostingMessage) && (
          <View style={{ marginTop: 100, marginBottom: 20 }}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={{ textAlign: 'center', color: colors.primary }}>
              Loading..
            </Text>
          </View>
        )}

        {messages.map((message) => (
          <ContentCard
            key={message._id}
            header={message.writer}
            body={message.text}
            marginBottom={60}
            align={
              message.text && isEnglishCharacter(message.text[0])
                ? 'left'
                : 'right'
            }
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
  button: {
    alignSelf: 'center',
    width: '50%',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: { fontSize: 20, fontWeight: 'bold' }
});

export default withImageOverlay(Etwasel, etwasel_background);
