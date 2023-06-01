// UserInfoScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

const UserInfo = ({navigation}) => {
  const handleLogout = () => {
    // Implement logic to handle user logout
  };

  const handleDeleteAccount = () => {
    // Implement logic to handle user account deletion
  };

  const [isLogin, setIslogin] = useState(false);

  const goLogin = () => {
    navigation.navigate('Login');
  };
  const goProfile = () => {
    navigation.navigate('MyProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.me}>Tôi</Text>
      </View>
      <Text style={styles.title}>Tài khoản</Text>
      {isLogin ? (
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
      {isLogin ? (
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
          <View style={styles.myProfileContainer}>
            <Text style={styles.subtitle}>Đăng xuất </Text>
            <Image
              style={styles.iconArrow}
              source={require('../../media/iconApp/arrow.png')}
            />
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34cceb',
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
    // borderColor: 'black',
    // borderWidth: 0.19
  },
  iconArrow: {
    height: 18,
    width: 18,
  },
  container: {
    flex: 1,
  },

  title: {
    backgroundColor: '#EAEAEA',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 2,
  },
  subtitle: {
    backgroundColor: '#F8F8F8',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 2,
  },
});

export default UserInfo;
