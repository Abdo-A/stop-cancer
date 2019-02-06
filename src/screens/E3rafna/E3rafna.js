import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import React, { Component } from 'react';

import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

const e3rafna_background = require('../../assets/images/e3rafna_background.jpeg');

class E3rafna extends Component {
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

export default withImageOverlay(E3rafna, e3rafna_background);
