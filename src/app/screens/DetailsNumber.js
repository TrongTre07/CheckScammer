import { StyleSheet, Text, View, Image, Flatlist } from 'react-native';
import React, { useEffect, useState } from 'react';
import instance from '../../axios/AxiosInstance';

const DetailsNumber = ({ route }) => {
  const { idItem } = route.params;

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
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {dataDetails.images[0].urlimage != undefined ? (
                <Image
                  style={styles.image}
                  source={{
                    uri: dataDetails.images[0].urlimage,
                  }}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={require('../../media/iconApp/panda.png')}
                />
              )}
            </View>

            {/* Details Container */}
            <View style={styles.detailsContainer}>
              {/* phoneNumber */}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>SDT: </Text>
                <Text style={styles.textResult}>{dataDetails.phonenumber}</Text>
                <View style={styles.line} />
              </View>
              {/* Bank */}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>STK: </Text>
                <Text style={styles.textResult}>{dataDetails.banknumber}</Text>
              </View>
              {/* Bank Name*/}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>NH: </Text>
                <Text style={styles.textResult}>{dataDetails.bankname}</Text>
              </View>
              {/* Date*/}
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.text}>Ngày: </Text>
                <Text style={styles.textResult}>
                  {convertTime(dataDetails.date)}
                </Text>
                {/* <Text style={styles.text}>{dataDetails.bankname}</Text> */}
              </View>
              {/* Name*/}
              <View
                style={[
                  styles.phoneNumberContainer,

                ]}>
                <Text style={styles.text}>Tên: </Text>
                <Text style={styles.textResult}>{dataDetails.name}</Text>
              </View>
              {/* Content denounce*/}
              <View style={[styles.denounceBox,]}>
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
          <Text>Dang lay du lieu</Text>
        </>
      )}
    </>
  );
};

export default DetailsNumber;

const styles = StyleSheet.create({
  textDenounce: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3F4A71'

  },
  denounceBox: {
    borderColor: '#0E2470',
    borderBottomWidth: 0.2,
    width: '100%',
    height: 150,
  },
  line: {
    height: 1,
    backgroundColor: '#0E2470',
  },
  textResult: {
    fontSize: 18,
    fontWeight: '400',
    color: '#3F4A71',

  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3F4A71',

  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '50%',
    height: 250,
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
    flex: 1,
    backgroundColor: '#FAFBFF'
  },
});
