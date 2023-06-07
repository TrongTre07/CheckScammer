import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import PopUpDetails from './PopUpDetails';
import instance from '../../axios/AxiosInstance';
import {useMyContext} from '../MyContext';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const History = ({route, navigation}) => {
  const listData = [
    {
      id: 1,
      name: 'tao ne',
      phoneNumber: '11232323',
      bankNumber: '1123234325',
      bankName: 'VSStudio',
      date: '12/02/2023',
      additionalInfo: 'abc',
      image:
        'https://fastly.picsum.photos/id/458/200/300.jpg?hmac=2d4QALnxYzzYD8DSwuNsa7lutkdOxLsKojuxbNfd31I',
      status: 'dang cho',
    },
    {
      id: 2,
      name: 'tao ne',
      phoneNumber: '1231232132',
      bankNumber: '1123234325',
      bankName: 'VSCode',
      date: '12/12/2023',
      additionalInfo: 'abc',
      image:
        'https://fastly.picsum.photos/id/458/200/300.jpg?hmac=2d4QALnxYzzYD8DSwuNsa7lutkdOxLsKojuxbNfd31I',
      status: 'dang cho',
    },
  ];

  const [dataByUser, setDataByUser] = useState();

  const {userData} = useMyContext();
  console.log("USERNAME: ", userData)
  let idUser;
  if (userData != undefined) {
    idUser = userData.username;
  }
  useEffect(() => {
    console.log("ID USER: ", idUser)
    instance
      .get(`product/get-by-nameuser/${idUser}`)
      .then(response => {
        if (response.data.result == true) {
          console.log('RES: ', response.data.product);
          const arrNumber = response.data.product;
          setDataByUser([...arrNumber].reverse());
        } else {
          toastFail();
        }
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });
  }, [idUser]);

  const toastFail = () => {
    Toast.show({
      type: 'success',
      text1: 'Có lỗi xảy ra! Thử lại nhé',
    });
  };

  const goLogin = () =>{
    navigation.navigate("UserInformation", {screen: "Login"})
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => {
    setModalVisible(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({item, index}) => {
    const backgroundColor = index % 2 === 0 ? '#ECEAEA' : '#FFFFFF'; // Alternating background colors

    const handlePress = () => {
      openModal(item);
    };
    return (
      <Pressable onPress={handlePress}>
        <View style={[styles.itemContainer, {backgroundColor}]}>
          {/* <Image source={{uri: item.image}} style={styles.images} /> */}
          <View style={styles.textContainer}>
            <Text style={styles.phoneNumber}>SDT: {item.phonenumber}</Text>
            <Text style={styles.name}>Tên: {item.name}</Text>
            <Text style={styles.name}>Ngày: {item.date}</Text>
            <Text style={styles.name}>Trạng thái: {item.status.text}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      {userData == undefined ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }}>
          <Pressable style={styles.btnRequiredLogin} onPress={goLogin}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Bạn cần đăng nhập
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          {dataByUser != undefined ? (
            <>
              <View style={styles.container}>
                <FlatList
                  data={dataByUser}
                  renderItem={renderItem}
                  keyExtractor={item => item._id}
                  contentContainerStyle={styles.contentContainer}
                />
                {selectedItem && (
                  <PopUpDetails
                    modalVisible={modalVisible}
                    closeModal={closeModal}
                    selectedItem={selectedItem}
                  />
                )}
                <Toast />
              </View>
            </>
          ) : (
            <>
              <Text>Loading</Text>
            </>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnRequiredLogin: {
    width: '50%',
    borderRadius: 10,
    backgroundColor: '#1D9CE2',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 10, // Adds spacing at the bottom of the list
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#CBCACA',
    borderWidth: 0.5, // Adds spacing between each item
  },
  image: {
    width: 60,
    height: 100,

    margin: 10,
  },
  textContainer: {
    margin: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bankInfo: {
    fontSize: 14,
  },
  additionalInfo: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default History;
