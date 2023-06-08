// UserInfoScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  Alert,
} from 'react-native';
import {useMyContext} from '../MyContext';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const UserInfo = ({navigation}) => {
  const handleLogout = () => {
    // Implement logic to handle user logout
  };

  const handleDeleteAccount = () => {
    // Implement logic to handle user account deletion
  };

  const {isLogged} = useMyContext();

  const goLogin = () => {
    navigation.navigate('Login');
  };
  const goProfile = () => {
    navigation.navigate('MyProfile');
  };
  const {setUserData, setIsLogged} = useMyContext();
  const goLogout = () => {
    Alert.alert(
      'Đăng Xuất?',
      'Bạn có chắc là sẽ đăng xuất không',
      [{text: 'OK', onPress: () => logout()}],
      {cancelable: false},
    );

    const logout = () => {
      Toast.show({
        type: 'success',
        text1: 'Đăng xuất thành công!',
      });
      setTimeout(() => {
        setUserData({});
        setIsLogged(false);
      }, 1000);
    };
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../media/imgBackground/bgHorizontal.png')}
        style={styles.header}>
        <Text style={styles.me}>Tôi</Text>
      </ImageBackground>
      <Text style={styles.title}>Tài khoản</Text>
      {isLogged ? (
        <>
          {/* My Profile */}
          <Pressable onPress={goProfile}>
            <View style={styles.myProfileContainer}>
              <Text style={styles.subtitle}>Hồ sơ của tôi</Text>
              <Image
                style={styles.iconArrow}
                source={require('../../media/iconApp/arrow.png')}
              />
            </View>
          </Pressable>
        </>
      ) : (
        <>
          {/* My Profile */}
          <Pressable onPress={goLogin}>
            <View style={styles.myProfileContainer}>
              <Text style={styles.subtitle}>Đăng nhập </Text>
              <Image
                style={styles.iconArrow}
                source={require('../../media/iconApp/arrow.png')}
              />
            </View>
          </Pressable>
        </>
      )}

      {/* Show login or my profile */}

      <Text style={styles.title}>Cài đặt</Text>
      {/* Notification setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Cài đặt thông báo </Text>
        <Image
          style={styles.iconArrow}
          source={require('../../media/iconApp/arrow.png')}
        />
      </View>

      {/* Language Setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Cài đặt ngôn ngữ</Text>
        <Image
          style={styles.iconArrow}
          source={require('../../media/iconApp/arrow.png')}
        />
      </View>

      <Text style={styles.title}>Hỗ trợ </Text>
      {/* Notification setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Trung tâm hỗ trợ </Text>
        <Image
          style={styles.iconArrow}
          source={require('../../media/iconApp/arrow.png')}
        />
      </View>

      {/* Language Setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Điều khoản</Text>
        <Image
          style={styles.iconArrow}
          source={require('../../media/iconApp/arrow.png')}
        />
      </View>
      {/* Language Setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Giới thiệu </Text>
        <Image
          style={styles.iconArrow}
          source={require('../../media/iconApp/arrow.png')}
        />
      </View>
      {isLogged ? (
        <>
          {/* General  */}
          <Text style={styles.title}>Quản lý </Text>
          {/* Language Setting */}
          <View style={styles.myProfileContainer}>
            <Text style={styles.subtitle}>Xóa tài khoản </Text>
            <Image
              style={styles.iconArrow}
              source={require('../../media/iconApp/arrow.png')}
            />
          </View>
          {/* Language Setting */}
          <Pressable onPress={goLogout}>
            <View style={styles.myProfileContainer}>
              <Text style={styles.subtitle}>Đăng xuất </Text>
              <Image
                style={styles.iconArrow}
                source={require('../../media/iconApp/arrow.png')}
              />
            </View>
          </Pressable>
          <Toast />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: 10,
    backgroundColor: '#FAFBFF',

    // borderColor: 'black',
    // borderWidth: 0.19
  },
  iconArrow: {
    height: 18,
    width: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#E6EAF1',
  },

  title: {
    backgroundColor: '#E6EAF1',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 2,
    color: '#3F4A71',
  },
  subtitle: {
    color: '#3F4A71',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 2,
  },
});

export default UserInfo;
