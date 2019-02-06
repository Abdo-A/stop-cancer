import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import React, { Component } from 'react';

import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

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

export default withImageOverlay(
  E3rafna,
  'https://images.pexels.com/photos/1323864/pexels-photo-1323864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
);
