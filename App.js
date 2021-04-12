import React from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from './Screens/MainScreen';
import CameraScreen from './Screens/CameraScreen';

import { Container, Content, View, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  screenDefault: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0c033'
  },
  screenText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  }
});


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
    <Container>
      <Content>
        <Swiper loop={false} showsPagination={false}>

          <View style={styles.screenDefault}>
            <Text style={styles.screenText}>Main Screen</Text>
          </View>

          <CameraScreen />
          
          <View style={styles.screenDefault}>
            <Text style={styles.screenText}>Screen Two</Text>
          </View>

          <View style={styles.screenDefault}>
            <Text style={styles.screenText}>Third Screen</Text>
          </View>

        </Swiper>
      </Content>
    </Container>
    );
  }
}
