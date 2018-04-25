import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Util from './Utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      days: [{
        key: 0,
        title: "01-截屏组件",
        component: "Component01",
        isFA: false,
        icon: "ios-crop",
        size: 48,
        color: "#ff856c",
        hideNav: false,
      },{
        key: 1,
        title: "02-文档查看组件",
        component: "Component02",
        isFA: false,
        icon: "ios-document-outline",
        size: 48,
        color: "#66CC33",
        hideNav: false,
      },{
        key: 2,
        title: "03-圆形进度条组件",
        component: "Component03",
        isFA: false,
        icon: "ios-checkmark-circle-outline",
        size: 48,
        color: "#CC0066",
        hideNav: false,
      },{
        key: 3,
        title: "04-弹出框组件",
        component: "Component04",
        isFA: false,
        icon: "ios-square-outline",
        size: 48,
        color: "#9F4D95",
        hideNav: false,
      },{
        key: 4,
        title: "05-表格组件",
        component: "Component05",
        isFA: false,
        icon: "md-grid",
        size: 48,
        color: "#660099",
        hideNav: false,
      },{
        key: 5,
        title: "06-图片查看组件",
        component: "Component06",
        isFA: false,
        icon: "ios-image",
        size: 48,
        color: "#3498DB",
        hideNav: false,
      },{
        key: 6,
        title: "07-智能提示输入框",
        component: "Component07",
        isFA: false,
        icon: "ios-create-outline",
        size: 48,
        color: "#3498DB",
        hideNav: false,
      },{
        key: 7,
        title: "08-图片选择裁剪",
        component: "Component08",
        isFA: false,
        icon: "ios-cut-outline",
        size: 48,
        color: "#007979",
        hideNav: false,
      },{
        key: 8,
        title: "09-二维码生成",
        component: "Component09",
        isFA: true,
        icon: "qrcode",
        size: 48,
        color: "black",
        hideNav: false,
      },{
        key: 9,
        title: "10-悬浮按钮",
        component: "Component10",
        isFA: false,
        icon: "ios-radio-button-off",
        size: 48,
        color: "black",
        hideNav: false,
      },{
        key: 10,
        title: "11-日期选择组件",
        component: "Component11",
        isFA: false,
        icon: "ios-time-outline",
        size: 48,
        color: "#8A2BE2",
        hideNav: false,
      }]
    }
  }

  static navigationOptions = {
    title: 'React Native组件大全',
  };

  render() {
    const { navigate } = this.props.navigation;

    var boxs = this.state.days.map(function (elem, index) {
      return (
        <TouchableHighlight key={elem.key} style={[styles.touchBox, index % 3 == 2 ? styles.touchBox2 : styles.touchBox1]} underlayColor="#eee" onPress={() => navigate(elem.component, { name: elem.title })}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>{elem.title}</Text>
            {elem.isFA ? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon, { color: elem.color }]}></IconFA> :
              <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon, { color: elem.color }]}></Icon>}
          </View>
        </TouchableHighlight>
      );
    })

    return (
      <View style={styles.touchBoxContainer}>
        {boxs}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row", 
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
});
