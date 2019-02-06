import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import React, { Component } from 'react';

import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

const etwasel_background = require('../../assets/images/etwasel_background.jpeg');

class Etwasel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  }
});

export default withImageOverlay(Etwasel, etwasel_background);
