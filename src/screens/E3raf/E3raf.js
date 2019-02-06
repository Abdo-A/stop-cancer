import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import React, { Component } from 'react';

import campaignData from '../../assets/data/campaignData';
import cancerData from '../../assets/data/cancerData';
import ContentCard from '../../components/Card/ContentCard';
import withImageOverlay from '../../components/hoc/withImageOverlay/withImageOverlay';

const e3raf_background = require('../../assets/images/e3raf_background.jpeg');

class E3raf extends Component {
  shuffleArray = (array) => {
    //Function to randomize the array items order

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
        <ContentCard
          header={campaignData.header}
          body={campaignData.body}
          align="right"
          imageURL={campaignData.image}
        />

        {this.shuffleArray(cancerData).map((data) => (
          <ContentCard
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

export default withImageOverlay(E3raf, e3raf_background);
