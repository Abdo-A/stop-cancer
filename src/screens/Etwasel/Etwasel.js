import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import React, { Component } from 'react';

import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

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

export default withImageOverlay(
  Etwasel,
  'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
);
