import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import ViewShot from "react-native-view-shot";

export default class Component01 extends React.Component {
    doCapture = () => {
        this.refs.viewShot.capture().then(uri => {
            alert(uri);
        });
    }

    render() {
        return (
            <ScrollView>
                <ViewShot ref="viewShot" >
                    <Text>...The Scroll View Content Goes Here...</Text>
                    <Button title="截图" onPress={() => this.doCapture}
                    />
                </ViewShot>
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
});
