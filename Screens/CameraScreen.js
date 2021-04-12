import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

import { Icon, Header } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const CameraScreen = () => {

    const [hasPermission, setPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect (() => {
        (async () => {
            const { status  } = await Camera.requestPermissionsAsync();
            setPermission(status === 'granted');
        }) ();
    }, []);

    if(hasPermission === null) {
        return <View />;
    }

    if(hasPermission === false) {
        return <Text>No Access to Camera</Text>;
    }

  return (
  <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
          <Header style={{backgroundColor: 'transparent'}}>
          <View>
              <Icon type="Ionicons" name="ios-camera-reverse" style={{ color: 'white', fontSize: 25}} />
          </View>
          </Header>

          <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 15}}>
              <MaterialCommunityIcons name="circle-outline" style={{color: 'white', fontSize: 100}}></MaterialCommunityIcons>
          </View>

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
        justifyContent: 'space-between',
    },

});

export default CameraScreen;