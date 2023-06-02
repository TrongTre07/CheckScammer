import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import instance from '../../axios/AxiosInstance';
import {useMyContext} from '../MyContext';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('thaihoaaa');
  const [password, setPassword] = useState('123');
  const {setUserData, setIsLogged} = useMyContext();

  const goRegister = () => {
    navigation.navigate('Register');
  };
  const goForgotPassword = () => {};

  const toastSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Đăng nhập thành công!',
    });
  };
  const toastFail = () => {
    Toast.show({
      type: 'success',
      text1: 'Đăng nhập thất bại!',
    });
  };
  const goHome = ()=>{
    navigation.navigate("Homepage")
  }

  const login = () => {
    instance
      .post('user/login', {username, password})
      .then(response => {
        console.log('LOGIN DATA: ', response.data);
        if (response.data.result == true) {
          setUserData(response.data.user);
          setIsLogged(true);
          toastSuccess();
          setTimeout(goHome, 2000)
        } else {
          setUserData(response.data.user);
          setIsLogged(false);
          toastFail();
        }
      })
      .catch(error => {
        console.log('ERROR: ', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../media/iconApp/background.jpg')}
        style={styles.backgroundImage}>
        <Text style={styles.title}>ĐĂNG NHẬP </Text>

        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          placeholder="Tên đăng nhập"
          defaultValue="thaihoaaa"
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          placeholder="Mật khẩu"
          secureTextEntry
          defaultValue="123"
        />

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Đăng nhập </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.footerText}>Bạn không có tài khoản?</Text>
            <TouchableOpacity onPress={goRegister}>
              <Text style={styles.footerLink}>Đăng ký </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Quên mật khẩu </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#3262a8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    marginRight: 5,
    color: 'white',
  },
  footerLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default Login;
