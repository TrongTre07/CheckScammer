// HomeScreen.js

import React, { useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import { useMyContext } from '../MyContext';
import instance from '../../axios/AxiosInstance';
import Toast from 'react-native-toast-message';

const HomeScreen = ({ navigation }) => {
  //   const [phoneNumbers, setPhoneNumbers] = React.useState([]);

  // navigation = props
  const data1 = [
    {
      id: 1,
      phoneNumber: '1234567899',
      owner: 'tao ne',
      time: '12/23/2023',
    },
    {
      id: 2,
      phoneNumber: '1234567899',
      owner: 'tao ne',
      time: '12/23/2023',
    },
    {
      id: 3,
      phoneNumber: '1234567899',
      owner: 'tao ne',
      time: '12/23/2023',
    },
  ];

  const { allNumber, setAllNumber } = useMyContext();

  const sendId = id => {
    navigation.navigate('Details', { idItem: id });
  };

  useEffect(() => {
    instance
      .get('product/get-all')
      .then(response => {
        if (response.data.result == true) {
          setAllNumber(response.data.product);
        } else {
          Toast.show({
            type: 'success',
            text1: 'Lấy dữ liệu thất bại!',
          });
        }
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });
  }, []);

  const convertTime = dateString => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: months are zero-based
    const day = date.getDate();

    const dateRender = `${day}-${month}-${year}`;

    return dateRender;
  };

  const { userData } = useMyContext();
  const goAddReport = () => {
    if (userData == undefined) {
      Toast.show({
        type: 'success',
        text1: 'Bạn cần đăng nhập!',
      });
      return;
    }

    navigation.navigate('AddReport');
  };

  return (
    <View style={styles.container}>
      <>
        {allNumber ? (
          <>

            <ImageBackground
              source={require('../../media/imgBackground/bgHorizontal.png')}
              style={styles.searchBox}
            >
              <View />
              <TextInput
                style={styles.searchInput}
                placeholder="Enter phone number"
              // Implement the logic to handle user input for searching
              />

              <Pressable onPress={() => goAddReport()}>
                <Image source={require('../../media/iconApp/report.png')} />
              </Pressable>
              <View />
            </ImageBackground>
            <View style={{
              paddingHorizontal: 20,

            }}>
              <FlatList
                style={{
                  marginTop: '7%',
                }}
                data={allNumber}
                renderItem={({ item }) => (
                  <Pressable onPress={() => sendId(item._id)}>
                    <View style={styles.phoneNumberItem}>
                      <Text style={styles.phoneNumberText}>
                        {item.phonenumber}
                      </Text>
                      <View style={styles.nameAndDate}>
                        <Text style={styles.ownerText}>{item.name}</Text>
                        <Text style={styles.ownerText}>
                          {convertTime(item.date)}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                )}
                keyExtractor={item => item._id}
              // Implement the logic to fetch and display the phone numbers and their owners
              />
              <View style={styles.totalScammedContainer}>
                <Text style={styles.totalScammedText}>
                  Tổng số điện thoại Scam: {allNumber.length}
                </Text>
              </View>
            </View>

          </>
        ) : (
          <Text>Nothing to show...</Text>
        )}
      </>

      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBG: {
    width: '100%',
    height: 40,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  totalScammedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchInput: {
    width: '83%',
    borderColor: '#CCCCCC',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    height: '60%'
  },
  phoneNumberItem: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  phoneNumberText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3F4A71'
  },
  ownerText: {
    color: '#3F4A71',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalScammedText: {
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-end',
    color: '#3F4A71',
  },
});

export default HomeScreen;
