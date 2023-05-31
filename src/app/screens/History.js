import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Pressable} from 'react-native';
import PopUpDetails from './PopUpDetails';

const History = ({route}) => {
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
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.phoneNumber}>SDT: {item.phoneNumber}</Text>
            <Text style={styles.name}>Tên: {item.name}</Text>
            <Text style={styles.name}>Ngày: {item.date}</Text>
            <Text style={styles.name}>Trạng thái: {item.status}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
      {selectedItem && (
        <PopUpDetails
          modalVisible={modalVisible}
          closeModal={closeModal}
          selectedItem={selectedItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
