import { ActivityIndicator, View } from 'react-native';
import React from 'react';

import styles from './LoadingStyles';

const Loading = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
