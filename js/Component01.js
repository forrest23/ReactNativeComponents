import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import captureRef from "react-native-view-shot";

export default class Component01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://pic.yupoo.com/forrest071/FXTxp6DG/medium.jpg',
            value: {
                format: "png",
                quality: 0.9,
                result: "tmpfile",
                snapshotContentContainer: false
              }
        };
    }

    doCapture = () => {
        console.log(11111)
         captureRef(this.refs.viewShot, this.state.value)
         console.log(this.state.value.result);
    }

    onCapture = uri => {
        console.log("do something with ", uri);
        this.setState({ imageUrl: uri });
    }

    render() {
        return (
            <ScrollView ref="viewShot" >
                <Text>...The Scroll View Content Goes Here...</Text>
                <Button title="截图" onPress={() => this.doCapture()} />
                <Image
                    style={styles.logo}
                    source={{ uri: this.state.imageUrl }}
                />
            </ScrollView>
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
    logo: {
        width: 300,
        height: 297
    }
});
