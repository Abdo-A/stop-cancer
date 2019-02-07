import { Font } from 'expo';
import { Root } from 'native-base';
import React, { Component } from 'react';

import Loading from './src/components/Loading/Loading';
import MainNavigator from './src/routes/MainNavigator';

const loadAllFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
export const loadFonts = loadAllFonts([
  // Native Base Fonts
  {
    Roboto: require('native-base/Fonts/Roboto.ttf')
  },
  {
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
  }
]);

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(loadFonts);

    this.setState(() => ({ fontLoaded: true }));
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) {
      return <Loading />;
    }

    return (
      <Root>
        <MainNavigator />
      </Root>
    );
  }
}
