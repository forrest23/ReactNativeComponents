import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  },
  {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  },
  {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  },
];

export default class Component06 extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageViewer
          imageUrls={images}
          failImageSource={{
            url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
        />
      </View>
    );
  }
}
