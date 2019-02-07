import { StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Text, View, Button } from 'native-base';
import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react';

import emojis from '../../assets/data/emojis';
import teamData from '../../assets/data/teamData';
import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

const e3rafna_background = require('../../assets/images/e3rafna_background.jpeg');

class E3rafna extends Component {
  state = {};

  onButtonPress = (item) => {
    this[item].fadeOutLeft(1200).then(() =>
      this.setState({
        [item]: {
          showMyEmoji: true,
          myEmojiIndex: Math.floor(
            (Math.random() * emojis.length) % emojis.length
          )
        }
      })
    );
  };

  onEmojiPress = (item) => {
    this.setState({ [item]: false });
    this[item].fadeInLeft(1200);
  };

  render() {
    return (
      <View style={styles.container}>
        {teamData.map((member, i) => (
          <View
            key={member}
            style={{
              height: (Dimensions.get('window').height - 200) / teamData.length,
              justifyContent: 'center'
            }}
          >
            <Animatable.View
              animation="fadeInLeft"
              ref={(ref) => (this[member] = ref)}
            >
              <Button
                onPress={() => this.onButtonPress(member)}
                success
                style={styles.button}
              >
                <Text style={styles.name}>{member}</Text>
              </Button>
            </Animatable.View>
            {this.state[member] && this.state[member].showMyEmoji ? (
              <View style={styles.emojiContainer}>
                <TouchableWithoutFeedback
                  onPress={() => this.onEmojiPress(member)}
                >
                  <Text style={styles.emoji}>
                    {emojis[this.state[member].myEmojiIndex]}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    // height: Dimensions.get('window').height - 250,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  button: {
    alignSelf: 'center',
    width: '50%',
    justifyContent: 'center'
  },
  name: { fontWeight: 'bold', fontSize: 17 },
  emojiContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  emoji: { fontSize: 30, margin: 0 }
});

export default withImageOverlay(E3rafna, e3rafna_background);
