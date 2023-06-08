import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, ToastAndroid,ImageBackground, StyleSheet } from 'react-native';
import instance from '../../axios/AxiosInstance';

const Register = ({navigation}) => {

  const [phonenumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordconfirm] = useState('');
  const [username, setUsername] = useState('');
  const phoneNumberPattern = /^\d{10,11}$/;
  
const goLogin = () =>{
navigation.goBack()
}

  const goRegister = () => {
    if (phonenumber == null || name == null|| password == null|| passwordconfirm == null|| username == null) {
      ToastAndroid.show('Bạn cần nhập thông tin!', ToastAndroid.SHORT);
      return;
    }
    if (!phoneNumberPattern.test(phonenumber)) {
      ToastAndroid.show('Số điện thoại không đúng!', ToastAndroid.SHORT);
      return;
    }
    if (passwordconfirm !== password) {
      ToastAndroid.show('Mật khẩu không trùng nhau!!', ToastAndroid.SHORT);
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json', // or 'application/x-www-form-urlencoded'
      },
    };

    instance
      .post(
        'user/add',
        {
          username: username,
          password: password,
          name: name,
          phonenumber: phonenumber,
        },
        config,
      )
      .then(response => {
        // console.log('RES: ', response.data);
        if (response.data.result == true) {
          // toastSuccess();
          ToastAndroid.show('Bạn đã đăng ký thành công!', ToastAndroid.SHORT);
          setTimeout(() => {
          navigation.goBack();
            
          }, 1000);
        } else {
          // toastFail();
          ToastAndroid.show('Có lỗi xảy ra!', ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        // toastFail();
        ToastAndroid.show('Có lỗi xảy ra!', ToastAndroid.SHORT);
        console.log('ERROR: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../media/imgBackground/bgVertical.png")}
        style={styles.backgroundImage}
      >
        {/* <TouchableOpacity 
          onPress={()=> navigation.goBack()}
          style={{position: 'absolute', top: 20, left: 20,}}>
          <Image style={{ resizeMode: 'contain' }} source={require('../../media/iconNavigate/back.png')} />

        </TouchableOpacity> */}
        <Text style={styles.title}>ĐĂNG KÝ</Text>

        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập "
          onChangeText={text => setUsername(text)}

        />
        <TextInput
          style={styles.input}
          placeholder="Họ tên"
          onChangeText={text => setName(text)}

        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          onChangeText={text => setPhoneNumber(text)}

        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          onChangeText={text => setPassword(text)}

        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
          onChangeText={text => setPasswordconfirm(text)}
        />

        <TouchableOpacity 
          onPress={()=>goRegister()}
          style={styles.button}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <View style={{flexDirection:'row'}}>

          <Text style={styles.footerText}>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={goLogin}>
            <Text style={styles.footerLink}>Đăng nhập</Text>
          </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    position:'relative',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#113C5D',
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: 'white',
    marginVertical:10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#004880',
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
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20,
  },
  footerText: {
    marginRight: 5,
    fontWeight:'500',
    color:'#000'
  },
  footerLink: {
    fontWeight:'500',
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default Register;
