// UserInfoScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import { useMyContext } from '../MyContext';

const MyProfile = ({ navigation }) => {
  const handleLogout = () => {
    // Implement logic to handle user logout
  };

  const handleDeleteAccount = () => {
    // Implement logic to handle user account deletion
  };

  const {userData} = useMyContext()
  

  const goLogin = () => {
    navigation.navigate('Login');
  };

  const goChangePassword = () => {
    navigation.navigate("ChangePassword")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../media/imgBackground/bgHorizontal.png')}
        style={styles.header}>
        <View style={{ position: 'absolute', right: 10, top: 10 }}>
          <Text style={{ color: '#fff', fontSize: 15 }}>Sửa</Text>
        </View>
        <Image
          style={{ top: 20, left: 30, resizeMode: 'cover', width: 100, height: 100 }}
          source={require('../../media/imgBackground/logo.png')} />
        <View style={{ position: 'absolute', left: 10, bottom: 20 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>{userData.name}</Text>
        </View>
      </ImageBackground>

      {/* Notification setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Tên đăng nhập </Text>
        <Text style={styles.subtitle}>{userData.username}</Text>
      </View>

      {/* Language Setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Số điện thoại</Text>
        <Text style={styles.subtitle}>{userData.phonenumber}</Text>

      </View>
      {/* Language Setting */}
      <TouchableOpacity
        onPress={goChangePassword}
        style={[styles.myProfileContainer,]}>
        <Text
          style={[styles.subtitle]}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 180,
    position: 'relative'
  },
  me: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  myProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFBFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#062C77',
    borderWidth: 0.2
    // borderColor: 'black',
    // borderWidth: 0.19
  },
  iconArrow: {
    height: 18,
    width: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF',

  },

  title: {
    backgroundColor: '#EAEAEA',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: '#3F4A71',
    marginBottom: 2,

  },
});

export default MyProfile;
