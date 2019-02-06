import { StyleSheet } from 'react-native';
import React, { Component } from 'react';

import cancerData from '../../assets/data/cancerData';
import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';
import { Text, View } from 'native-base';
import Card from '../../components/Card/Card';

class E3raf extends Component {
  //Function to randomize the array items order
  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.shuffleArray(cancerData).map((data) => (
          <Card
            header={data.header}
            body={data.body}
            align="right"
            key={data.header}
          />
        ))}
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
