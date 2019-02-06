import { StyleSheet, Dimensions } from 'react-native';
import { Text, View, Button } from 'native-base';
import React, { Component } from 'react';

import teamData from '../../assets/data/teamData';
import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

const e3rafna_background = require('../../assets/images/e3rafna_background.jpeg');

class E3rafna extends Component {
  render() {
    return (
      <View style={styles.container}>
        {teamData.map((member) => (
          <Button
            success
            style={{
              alignSelf: 'center',
              width: '50%',
              justifyContent: 'center'
            }}
            key={member}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{member}</Text>
          </Button>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    height: Dimensions.get('window').height - 250,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

export default withImageOverlay(E3rafna, e3rafna_background);
