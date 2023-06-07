import {StyleSheet, Text, View, Image, Flatlist} from 'react-native';
import React, {useEffect, useState} from 'react';
import instance from '../../axios/AxiosInstance';

const DetailsNumber = ({route}) => {
  const {idItem} = route.params;
  

  const [dataDetails, setDataDetails] = useState();

  const convertTime = dateString => {
    const date = new Date(dateString);
  
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: months are zero-based
    const day = date.getDate();
  
    const dateRender = `${day}-${month}-${year}`;
  
    return dateRender;
  };

  useEffect(() => {
    instance
      .get(`product/get-by-id/${idItem}`)
      .then(response => {
        // console.log('RES: ', response.data);
        if (response.data.result == true) {
          console.log("DATA ID: ", response.data.product)
          setDataDetails(response.data.product);
        } else {
        }
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });
  }, []);
  return (
    <>
      {dataDetails ? (
        <>
          <View style={styles.container}>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://fastly.picsum.photos/id/413/200/300.jpg?hmac=bfSGClFpOROonzp5IIDI-aVAQMyyCC9lSOp184Tqu4M',
                }}
              />
            </View>

            {/* Details Container */}
            <View style={styles.detailsContainer}>
              {/* phoneNumber */}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>SDT: </Text>
                <Text style={styles.text}>{dataDetails.phonenumber}</Text>
                <View style={styles.line} />
              </View>
              {/* Bank */}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>STK: </Text>
                <Text style={styles.text}>{dataDetails.banknumber}</Text>
              </View>
              {/* Bank Name*/}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>NH: </Text>
                <Text style={styles.text}>{dataDetails.bankname}</Text>
              </View>
              {/* Date*/}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>Ngày: {convertTime(dataDetails.date)}</Text>
                {/* <Text style={styles.text}>{dataDetails.bankname}</Text> */}
              </View>
              {/* Name*/}
              <View
                style={[
                  styles.phoneNumberContainer,
                  {borderBottomColor: 'white'},
                ]}>
                <Text style={styles.text}>Tên: </Text>
                <Text style={styles.text}>{dataDetails.name}</Text>
              </View>
              {/* Content denounce*/}
              <View style={styles.denounceBox}>
                <View>
                  <Text style={styles.text}>Nội dung:</Text>
                  <Text style={styles.textDenounce}>{dataDetails.detail}</Text>
                </View>
              </View>
            </View>

            {/* Comment container */}
            <View>
              {/* <Flatlist
        
        /> */}
            </View>
          </View>
        </>
      ) : (
        <>
        <Text>Dang lay du lieu</Text></>
      )}
    </>
  );
};

export default DetailsNumber;

const styles = StyleSheet.create({
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
    width: '100%',
    height: 200,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    height: 50,
  },
  container: {
    flex: 1,
  },
});
