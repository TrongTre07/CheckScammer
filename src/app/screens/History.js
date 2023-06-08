import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  Button,
  TextInput,
  ImageBackground,
  RefreshControl
} from 'react-native';
import PopUpDetails from './PopUpDetails';
import instance from '../../axios/AxiosInstance';
import { useMyContext } from '../MyContext';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const History = ({ route, navigation }) => {
  
  const [refreshing, setRefreshing] = React.useState(false);
  const [dataByUser, setDataByUser] = useState();

  const { userData } = useMyContext();
  let idUser;
  if (userData != undefined) {
    idUser = userData.username;
  }
  useEffect(() => {
    
    instance
      .get(`product/get-by-nameuser/${idUser}`)
      .then(response => {
        if (response.data.result == true) {
          
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

  const goLogin = () => {
    navigation.navigate("UserInformation", { screen: "Login" })
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

  const convertTime = dateString => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: months are zero-based
    const day = date.getDate();

    const dateRender = `${day}-${month}-${year}`;

    return dateRender;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    
    instance
      .get(`product/get-by-nameuser/${idUser}`)
      .then(response => {
        if (response.data.result == true) {
          
          const arrNumber = response.data.product;
          setDataByUser([...arrNumber].reverse());
        } else {
          toastFail();
        }
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#F5F9FF' : '#ffffff'; // Alternating background colors

    const handlePress = () => {
      openModal(item);
    };
    return (

      <Pressable onPress={handlePress}>
        <View style={[styles.itemContainer, { backgroundColor }]}>
          {/* <Image source={{uri: item.image}} style={styles.images} /> */}
          <View style={styles.textContainer}>
            <Text style={styles.phoneNumber}>SDT: {item.phonenumber}</Text>
            <Text style={styles.name}>Tên: {item.name}</Text>
            <Text style={styles.name}>Ngày: {convertTime(item.date)}</Text>
            <Text style={styles.name}>Trạng thái: {item.status.text}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

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
    <>
      {userData == undefined ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#FAFBFF'
          }}>
          <Pressable style={styles.btnRequiredLogin} onPress={goLogin}>

              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                Bạn cần đăng nhập
              </Text>

          </Pressable>
        </View>
      ) : (
        <>
          {dataByUser != undefined ? (
            <>
              <ImageBackground
                source={require('../../media/imgBackground/bgHorizontal.png')}
                style={styles.searchBox}
              >
                <View />
                <View style={{ position: 'relative', width: '65%', height: 40 }}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Enter phone number"
                  // Implement the logic to handle user input for searching
                  />
                  <Image
                    style={{ position: 'absolute', top: '33%', left: '4%' }}
                    source={require('../../media/iconApp/search.png')} />
                </View>

                <Pressable onPress={() => goAddReport()}>
                  <Image source={require('../../media/iconApp/report.png')} />
                </Pressable>
                <View />
              </ImageBackground>
              <View style={styles.container}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataByUser}
                  renderItem={renderItem}
                  keyExtractor={item => item._id}
                  contentContainerStyle={styles.contentContainer}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
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
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70
  }, searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#3F4A71',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
  },
  btnRequiredLogin: {
    width: '50%',
    borderRadius: 6,
    backgroundColor: '#0055FF',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FAFBFF',
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
    color: '#3F4A71',
    fontWeight: 'bold',
  },
  phoneNumber: {
    color: '#3F4A71',
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
