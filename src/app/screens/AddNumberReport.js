import {
  StyleSheet,
  Text,
  View,
  Image,
  Flatlist,
  TextInput,
  Pressable,
  ToastAndroid,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import instance from '../../axios/AxiosInstance';
import DatePicker from 'react-native-date-picker';
import {useMyContext} from '../MyContext';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const AddNumberReport = ({navigation}) => {
  // const {idItem} = route.params;
  const idItem = '647a8970603562b4c35373b8';

  const [dataDetails, setDataDetails] = useState();

  const [phonenumber, setPhoneNumber] = useState();
  const [name, setName] = useState();
  const [banknumber, setBankNumber] = useState();
  const [bankname, setBankName] = useState();
  // const [date, setDate] = useState();
  const [detail, setDetail] = useState();

  // date picker
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const convertTime = dateString => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: months are zero-based
    const day = date.getDate();

    const dateRender = `${day}-${month}-${year}`;

    return dateRender;
  };

  const {userData} = useMyContext();

  const setOpenDatePicker = () => {
    setOpen(true);
  };

  const user = {
    nameuser: userData.username,
    phonenumber: userData.phonenumber,
  };
  const phoneNumberPattern = /^\d{10,11}$/;
  const bankNumberPattern = /^\d{9,14}$/;

  const images = [];

  const goReport = () => {
    if (phonenumber == null || name == null) {
      ToastAndroid.show('Bạn cần nhập đầy đủ thông tin', ToastAndroid.SHORT);
      return;
    }
    if (!phoneNumberPattern.test(phonenumber)) {
      ToastAndroid.show('Số điện thoại hoặc số ngân hàng không đúng!', ToastAndroid.SHORT);

      return;
    }
    if (!bankNumberPattern.test(banknumber)) {
      if (!banknumber == '') {
        ToastAndroid.show('Số điện thoại hoặc số ngân hàng không đúng!', ToastAndroid.SHORT);

        return;
      }
    }

    const config = {
      headers: {
        'Content-Type': 'application/json', // or 'application/x-www-form-urlencoded'
      },
    };

    instance
      .post(
        'product/add',
        {
          name: name,
          user: user,
          phonenumber: phonenumber,
          banknumber: banknumber,
          bankname: bankname,
          detail: detail,
          images: [{}],
        },
        config,
      )
      .then(response => {
        // console.log('RES: ', response.data);
        if (response.data.result == true) {
          // toastSuccess();
          ToastAndroid.show('Bạn đã tố cáo thành công!', ToastAndroid.SHORT);
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

  const toastSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Bạn đã tố cáo thành công!',
    });

    setTimeout(() => {
      navigation.goBack();
    }, 2000);
  };
  const toastFail = () => {
    Toast.show({
      type: 'success',
      text1: 'Có lỗi xảy ra!',
    });
  };
  const toastRequireMore = () => {
    Toast.show({
      type: 'success',
      text1: 'Bạn cần nhập thông tin!',
    });
  };
  const toastRequirePhone = () => {
    Toast.show({
      type: 'success',
      text1: 'Số điện thoại hoặc số ngân hàng không đúng!',
    });
  };

  return (
    <ScrollView style={styles.container} automaticallyAdjustKeyboardInsets={true}>
      <View >
        <View>
          <Image
            style={styles.image}
            // source={{
            //   uri: 'https://fastly.picsum.photos/id/413/200/300.jpg?hmac=bfSGClFpOROonzp5IIDI-aVAQMyyCC9lSOp184Tqu4M',
            // }}
            source={require('../../media/iconApp/panda.png')}
          />
        </View>

        {/* Details Container */}
        <View style={styles.detailsContainer}>
          {/* phoneNumber */}
          <View style={styles.phoneNumberContainer}>
            <TextInput
              placeholder="Nhập số điện thoại"
              onChangeText={text => setPhoneNumber(text)}
              keyboardType="numeric"
            />
            <View style={styles.line} />
          </View>
          {/* Bank */}
          <View style={styles.phoneNumberContainer}>
            <TextInput
              placeholder="Nhập số ngân hàng "
              onChangeText={text => setBankNumber(text)}
              keyboardType="numeric"
            />
          </View>
          {/* Bank Name*/}
          <View style={styles.phoneNumberContainer}>
            <TextInput
              placeholder="Nhập tên ngân hàng"
              onChangeText={text => setBankName(text)}
            />
          </View>
          {/* Date*/}
          <View style={styles.phoneNumberContainer}>
            <Pressable onPress={setOpenDatePicker}>
              <Text>{convertTime(date)}</Text>
            </Pressable>
          </View>
          {/* Name*/}
          <View style={[styles.phoneNumberContainer]}>
            <TextInput
              placeholder="Nhập tên"
              onChangeText={text => setName(text)}
            />
          </View>
          {/* Content denounce*/}
          <View style={styles.denounceBox}>
            <View>
              <TextInput
                placeholder="Nhập nội dung "
                onChangeText={text => setDetail(text)}
              />
            </View>
          </View>
        </View>

        {/* Confirm and Cancel */}
        <View style={styles.twoButton}>
        <Pressable
            style={[styles.button, {backgroundColor: '#0E2470'}]}
            onPress={goReport}>
            <Text style={styles.textButton}>Tố cáo </Text>
          </Pressable>
          <Pressable
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={() => navigation.goBack()}>
            <Text style={styles.textButton}>Hủy </Text>
          </Pressable>

        </View>

        <DatePicker

          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Toast />
      </View>
    </ScrollView>
  );
};

export default AddNumberReport;

const styles = StyleSheet.create({
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    height: 50,
    width: 100,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  twoButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textDenounce: {
    fontSize: 16,
    lineHeight: 24,
  },
  denounceBox: {
    borderColor: 'black',
    borderBottomWidth: 0.5,

    width: '100%',
    height: 150,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight: '900',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    resizeMode:'contain',
    width: '100%',
    height: 200,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#0E2470',
    height: 50,
  },
  container: {
    backgroundColor:'#FAFBFF',
    flex: 1,
  },
});
