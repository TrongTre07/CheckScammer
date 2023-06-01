import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../media/iconApp/background.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>ĐỔI MẬT KHẨU</Text>

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu cũ"
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu mới"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Xác nhận </Text>
        </TouchableOpacity>

      
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

export default ChangePassword;
