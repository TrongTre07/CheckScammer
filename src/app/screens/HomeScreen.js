// HomeScreen.js

import React from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useMyContext } from '../MyContext';

const HomeScreen = ({navigation}) => {
  //   const [phoneNumbers, setPhoneNumbers] = React.useState([]);

  // navigation = props
  const data1 = [
    {
      id: 1,
      phoneNumber: '1234567899',
      owner: 'tao ne',
      time: "12/23/2023"
    },
    {
      id: 2,
      phoneNumber: '1234567899',
      owner: 'tao ne',
      time: "12/23/2023"
    },
    {
      id: 3,
      phoneNumber: '1234567899',
      owner: 'tao ne',
      time: "12/23/2023"
    },
    
  ];

const {data, setData} = useMyContext()


  const sendId = (id) =>{
    console.log("PRESSED", data)
    navigation.navigate("Details")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter phone number"
        // Implement the logic to handle user input for searching
      />
      <FlatList
        data={data1}
        renderItem={({item}) => (
          <Pressable onPress={() => sendId(item.id)}>
            <View style={styles.phoneNumberItem}>
              <Text style={styles.phoneNumberText}>{item.phoneNumber}</Text>
              <View style={styles.nameAndDate}>

              <Text style={styles.ownerText}>{item.owner}</Text>
              <Text style={styles.ownerText}>{item.time}</Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        // Implement the logic to fetch and display the phone numbers and their owners
      />
      <Text style={styles.totalScammedText}>
        Total phone numbers scammed: {data.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameAndDate:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    fontSize: 16,
  },
  ownerText: {
    color: '#888888',
  },
  totalScammedText: {
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-end',
    color: '#888888',
  },
});

export default HomeScreen;
