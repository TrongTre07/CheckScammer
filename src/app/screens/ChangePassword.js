import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import instance from '../../axios/AxiosInstance';
import Toast from 'react-native-toast-message'

const ChangePassword = ({navigation}) => {

  const [username, setUsername] = useState()
  const [oldpassword, setOldPassword] = useState()
  const [newpassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const toastSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Thay đổi thành công!',
    });
  };
  const toastFail = () => {
    Toast.show({
      type: 'success',
      text1: 'Thay đổi thất bại!',
    });
  };
  const toastConflictPassword = () => {
    Toast.show({
      type: 'success',
      text1: 'Mật khẩu mới và cũ không giống!',
    });
  };

  const goProfile =() =>{
    navigation.navigate("User")
  }


  const changePassword = () => {
    if(confirmPassword == newpassword){
      instance
      .post('user/change-password', {username, oldpassword, newpassword})
      .then(response => {
        console.log('Change DATA: ', response.data);
        if (response.data.result == true) {
          // setUserData(response.data.user);
          // setIsLogged(true);
          toastSuccess();
          setTimeout(goProfile, 2000)
        } else {
          // setUserData(response.data.user);
          // setIsLogged(false);
          toastFail();
        }
      })
      .catch(error => {
        console.log('ERROR: ', error.message);
      });
    }else{
      toastConflictPassword()
    }
    
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../media/iconApp/background.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>ĐỔI MẬT KHẨU</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu cũ"
          onChangeText={text => setOldPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu mới"
          secureTextEntry
          onChangeText={text => setNewPassword(text)}

        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
          onChangeText={text => setConfirmPassword(text)}

        />

        <TouchableOpacity onPress={changePassword} style={styles.button}>
          <Text style={styles.buttonText}>Xác nhận </Text>
        </TouchableOpacity>

      
      </ImageBackground>
      <Toast/>
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
