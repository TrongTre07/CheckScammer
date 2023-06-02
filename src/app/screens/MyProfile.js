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

const MyProfile = ({navigation}) => {
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

  const goChangePassword = () =>{
    navigation.navigate("ChangePassword")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.me}>Tao Là Linh Xe Ôm</Text>
      </View>

      {/* Notification setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Tên đăng nhập </Text>
        <Text style={styles.subtitle}>MustFapToLive</Text>
      </View>
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Họ tên </Text>
        <Text style={styles.subtitle}>MustFapToLive</Text>
      </View>

      {/* Language Setting */}
      <View style={styles.myProfileContainer}>
        <Text style={styles.subtitle}>Ngày sinh</Text>
        <Text style={styles.subtitle}>MustFapToLive</Text>

      </View>
      {/* Language Setting */}
      <View style={styles.myProfileContainer}>
        <Text
        onPress={goChangePassword}
        style={[styles.subtitle, {textDecorationLine:"underline"}]}>Đổi mật khẩu</Text>
        
      </View>
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

export default MyProfile;
