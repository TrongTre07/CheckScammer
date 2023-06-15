import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('AppNavigation');
    }, 1000);
  return (
    <Image style={{flex:1,width:'100%',height:'100%'}} source={require('../../media/imgBackground/wellcome1.png')} />
    // <></>
  )
}

export default Welcome