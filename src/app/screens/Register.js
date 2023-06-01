import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Register = ({navigation}) => {

const goLogin = () =>{
navigation.goBack()
}

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../media/iconApp/background.jpg")}
        style={styles.backgroundImage}
      >
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
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
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
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20,
  },
  footerText: {
    marginRight: 5,
    color:'white'
  },
  footerLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default Register;
