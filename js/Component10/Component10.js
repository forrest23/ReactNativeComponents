import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default class Component10 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          悬浮按钮组件示例
        </Text>
        <ActionButton buttonColor="rgba(231,76,60,1)" position='left' verticalOrientation='up'>
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="ios-create-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="ios-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' onPress={() => {}}>
            <Icon name="ios-done-all-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { alert('你点了我！')}}
          renderIcon={() => (<View style={styles.actionButtonView}><Icon name="ios-create-outline" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>新增</Text>
          </View>)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  actionButtonText: {
    fontSize: 14,
    color: 'white',
  }
});