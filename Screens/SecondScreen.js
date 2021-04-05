import * as MediaLibrary from 'expo-media-library'
import React from 'react'
import { Button, View } from 'native-base';

export default class App extends React.Component {
 _mediaLibraryAsync = async () => {
     let { status } = await MediaLibrary.requestPermissionAsync()
     let media = await MediaLibrary.getAssetsAsync({
         mediaType: ['photo', 'video'],
     })
     let video = await MediaLibrary.getAssetInfoAsync(media.assets[0])

     console.log(video);
 };

 render() {
     return (
         <View 
         style={{
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center',
         }}>
             <Button 
             onPress={this._mediaLibraryAsync}
             title="Do MediaLibrary Stuff"
             />
         </View>
     );
 }
}