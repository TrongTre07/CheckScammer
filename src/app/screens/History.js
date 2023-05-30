// PhoneNumberDetailsScreen.js

import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const History = ({route}) => {
  const listData = [
    {
      id: 1,
      name: "tao ne",
      phoneNumber: '1231232132',
      bankNumber:'1123234325',
      bankName:'VSCode',
      additionalInfo:'abc',
      image: "https://fastly.picsum.photos/id/458/200/300.jpg?hmac=2d4QALnxYzzYD8DSwuNsa7lutkdOxLsKojuxbNfd31I"
    },
    {
      id: 2,
      name: "tao ne",
      phoneNumber: '1231232132',
      bankNumber:'1123234325',
      bankName:'VSCode',
      additionalInfo:'abc',
      image: "https://fastly.picsum.photos/id/458/200/300.jpg?hmac=2d4QALnxYzzYD8DSwuNsa7lutkdOxLsKojuxbNfd31I"
    }
  ];

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#ECEAEA' : '#FFFFFF'; // Alternating background colors

    return (
      <View style={[styles.itemContainer, { backgroundColor }]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
          <Text style={styles.bankInfo}>{item.bankName} - {item.bankNumber}</Text>
          <Text style={styles.additionalInfo}>{item.additionalInfo}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
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
    borderColor:"#CBCACA",
    borderWidth: 0.5 // Adds spacing between each item
  },
  image: {
    width: 60,
    height: 100,
    
    margin:10
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
