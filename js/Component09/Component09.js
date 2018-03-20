import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
} from 'react-native';

export default class Component09 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  state = {
    text: 'http://weixin.qq.com/r/1HWFnTrEGGdnrX7_9yDG',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor="purple"
          fgColor="white"
        />
        <Text style={styles.text}>
          欢迎关注我的微信公众号：ReactNative开发圈
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    width: Dimensions.get('window').width - 50,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
  },
});
