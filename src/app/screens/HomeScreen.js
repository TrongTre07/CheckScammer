// HomeScreen.js

import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  RefreshControl,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useMyContext} from '../MyContext';
import instance from '../../axios/AxiosInstance';
import Toast from 'react-native-toast-message';
import Swiper from 'react-native-swiper';

const HomeScreen = ({navigation}) => {
  const {allNumber, setAllNumber} = useMyContext();

  const [findNumber, setFindNumber] = useState();
  const [originalData, setOriginalData] = useState();

  const sendId = id => {
    navigation.navigate('Details', {idItem: id});
  };

  useEffect(() => {
    instance
      .get('product/get-all')
      .then(response => {
        if (response.data.result == true) {
          // const a = response.data.product.map(item => item.status.number==2).reverse();
          const list= [...response.data.product].reverse();
          const listFill= list.filter(item => item.status.number==2);
          setAllNumber(listFill);
          // setAllNumber(a);
        } else {
          Toast.show({
            type: 'success',
            text1: 'Lấy dữ liệu thất bại!',
          });
        }
      })
      .catch(error => {
        console.log('ERRORs: ', error);
      });
  }, []);

  console.log(allNumber)

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    instance
      .get('product/get-all')
      .then(response => {
        if (response.data.result == true) {
          const list= [...response.data.product].reverse();
          const listFill= list.filter(item => item.status.number==2);
          setAllNumber(listFill);
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

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const convertTime = dateString => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: months are zero-based
    const day = date.getDate();

    const dateRender = `${day}-${month}-${year}`;

    return dateRender;
  };

  const {userData} = useMyContext();
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
  // Example search text
  const filteredArray = [];

  const filteredData = searchText => {
    if (searchText == '') {
      
      onRefresh();
    }

    allNumber.forEach(obj => {
      // Check if any of the fields (banknumber, phonenumber, name) contain the search text
      if (
        obj.banknumber.includes(searchText) ||
        obj.phonenumber.includes(searchText) ||
        obj.name.includes(searchText)
      ) {
        filteredArray.push(obj);
      }
    });
    setOriginalData(allNumber);
    setAllNumber(filteredArray);
  };

  return (
    <View style={styles.container}>
      <>
        {allNumber ? (
          <>
            <ImageBackground
              source={require('../../media/imgBackground/bgHorizontal.png')}
              style={styles.searchBox}>
              <View />
              <View style={{position: 'relative', width: '65%', height: 40}}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Nhập số điện thoại cần tìm"
                  onChangeText={text => filteredData(text)}
                  // Implement the logic to handle user input for searching
                />
                <Image
                  style={{position: 'absolute', top: '33%', left: '4%'}}
                  source={require('../../media/iconApp/search.png')}
                />
              </View>

              <Pressable onPress={() => goAddReport()}>
                <Image source={require('../../media/iconApp/report.png')} />
              </Pressable>
              <View />
            </ImageBackground>
            <View style={{height: 200}}>
              <Swiper
                showsButtons={false}
                autoplayTimeout={4}
                loop={true}
                autoplay={true}
                showsPagination={false}>
                <View
                  key={0}
                  style={{
                    width: '100%',
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../media/imgBackground/checkscammer.png')}
                  />
                </View>
                <View
                  key={1}
                  style={{
                    width: '100%',
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../media/imgBackground/for.png')}
                  />
                </View>
                <View
                  key={1}
                  style={{
                    width: '100%',
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../media/imgBackground/together.png')}
                  />
                </View>
                <View
                  key={1}
                  style={{
                    width: '100%',
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../media/imgBackground/hello.png')}
                  />
                </View>
              </Swiper>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
              }}>
              <FlatList
                style={{
                  marginTop: '7%',
                  height: '57%',
                }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                // allNumber || originalData
                // originalData || allNumber
                data={allNumber}
                renderItem={({item}) => (
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
    backgroundColor: '#FAFBFF',
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#3F4A71',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
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
    color: '#3F4A71',
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
