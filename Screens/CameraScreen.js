import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

import { Icon, Header, Item, Input, Toast } from 'native-base';
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
          <Header searchBar rounded style={{backgroundColor: 'transparent'}}>
          <View style={{flexDirection: 'row', flex: 4, alignItems: 'center'}}>
              <Icon type="AntDesign" name="instagram" style={{ color: 'white', fontSize: 30}} />
              <Item style={{ backgroundColor: 'transparent'}}>
              <Icon type="Ionicons" name="search" style={{ color: 'white', fontSize: 30}} />
                  <Input placeholder="Search..." placeholderTextColor="white" />
              </Item>
              </View>
              <View style={{flexDirection: 'row', flex: 2, alignItems: 'center', justifyContent: 'space-around'}} >
                  <Icon type="Ionicons" name="ios-flash" style={{ color: 'white', fontSize: 30}} />
              <Icon onPress={
                  () => {
                      if(type === Camera.Constants.Type.back) {
                          setType(Camera.Constants.Type.front);
                      } else {
                          setType(Camera.Constants.Type.back);
                      }
                      
                  }
              } type="Ionicons" name="ios-camera-reverse" style={{ color: 'white', fontSize: 30}} />
          </View>
          </Header>

          <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>

              <MaterialCommunityIcons name="circle-outline" style={{color: 'white', fontSize: 100}} onPress={
                  () => {
                      Toast.show({
                          text: 'Snap! Took a Picture!',
                          buttonText: 'OK',
                      })

                  }
              } ></MaterialCommunityIcons>
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