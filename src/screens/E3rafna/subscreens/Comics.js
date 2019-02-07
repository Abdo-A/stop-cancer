import { View, Text } from 'react-native';
import React from 'react';

import ContentCard from '../../../components/Card/ContentCard';
import withImageOverlay from '../../../components/hoc/withImageOverlay/withImageOverlay';

const comics_background = require('../../../assets/images/comics_background.jpeg');

const comic_1 = require('../../../assets/images/comics/1.jpg');
const comic_2 = require('../../../assets/images/comics/2.jpg');
const comic_3 = require('../../../assets/images/comics/3.jpg');
const comic_4 = require('../../../assets/images/comics/4.jpg');
const comic_5 = require('../../../assets/images/comics/5.jpg');
const comic_6 = require('../../../assets/images/comics/6.jpg');
const comic_7 = require('../../../assets/images/comics/7.jpg');
const comic_8 = require('../../../assets/images/comics/8.jpg');
const comic_9 = require('../../../assets/images/comics/9.jpg');
const comic_10 = require('../../../assets/images/comics/10.jpg');
const comic_11 = require('../../../assets/images/comics/11.jpg');
const comic_12 = require('../../../assets/images/comics/12.jpg');
const comic_13 = require('../../../assets/images/comics/13.jpg');

const Comics = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <ContentCard imageURL={comic_1} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_2} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_3} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_4} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_5} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_6} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_7} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_8} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_9} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_10} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_11} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_12} height={400} resizeMode="contain" />
      <ContentCard imageURL={comic_13} height={400} resizeMode="contain" />
    </View>
  );
};

export default withImageOverlay(Comics, comics_background);
