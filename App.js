/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, withNavigation } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeScreen from './js/HomeScreen';
import ProfileScreen from './js/ProfileScreen';
import Component01 from './js/Component01/Component01';
import Component02 from './js/Component02/Component02';
import Component03 from './js/Component03/Component03';
import Component04 from './js/Component04/Component04';
import Component05 from './js/Component05/Component05';
import Component06 from './js/Component06/Component06';
import Component07 from './js/Component07/Component07';
import Component08 from './js/Component08/Component08';
import Component09 from './js/Component09/Component09';
import Component10 from './js/Component10/Component10';
import Component11 from './js/Component11/Component11';

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Component01: {screen: Component01},
  Component02: {screen: Component02},
  Component03: {screen: Component03},
  Component04: {screen: Component04},
  Component05: {screen: Component05},
  Component06: {screen: Component06},
  Component07: {screen: Component07},
  Component08: {screen: Component08},
  Component09: {screen: Component09},
  Component10: {screen: Component10},
  Component11: {screen: Component11},
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
