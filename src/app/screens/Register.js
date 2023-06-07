import React from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Register = ({navigation}) => {

const goLogin = () =>{
navigation.goBack()
}

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
        />
        <TextInput
          style={styles.input}
          placeholder="Họ tên"
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
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
