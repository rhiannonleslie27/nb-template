import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

// import { Container } from './styles';

const CameraScreen = () => {

    const [hasPermission, setPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    if(hasPermission === null) {
        return <View />;
    }

    if(hasPermission === false) {
        return <Text>No Access to Camera</Text>;
    }

    return (
        <View style={StyleSheet.container}>
            <Camera style={StyleSheet.camera} type={type}>

            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },

})

export default CameraScreen