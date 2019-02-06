import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import React, { Component } from 'react';

import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

class E3raf extends Component {
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
  E3raf,
  'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
);
