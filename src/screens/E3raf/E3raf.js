import { StyleSheet } from 'react-native';
import React, { Component } from 'react';

import cancerData from '../../assets/data/cancerData';
import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';
import { Text, View } from 'native-base';
import Card from '../../components/Card/Card';

class E3raf extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card header="HI" body="joh" />
        <Card header="HI" body="joh" />
        <Card header="HI" body="joh" />
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
