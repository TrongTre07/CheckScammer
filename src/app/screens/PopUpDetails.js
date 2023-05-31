import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const PopUpDetails = ({modalVisible, openModal, closeModal, selectedItem}) => {
  // ({ modalVisible, openModal, closeModal, phoneNumber, name, bankNumber, bankName, date, status, moreInfo })
  const {
    image,
    name,
    phoneNumber,
    bankName,
    bankNumber,
    date,
    status,
    moreInfo,
  } = selectedItem;
  console.log('DATA: ', selectedItem);
  const closePopup = () => {
    closeModal();
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity> */}

      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Image style={styles.image} source={{uri: image}} />
              <View>
                <Text style={styles.modalHeader}>Scam Information</Text>
                <Text style={styles.modalText}>PhoneNumber: {phoneNumber}</Text>
                <Text style={styles.modalText}>Name: {name}</Text>
                <Text style={styles.modalText}>Bank Number: {bankNumber}</Text>
                <Text style={styles.modalText}>Bank Name: {bankName}</Text>
                <Text style={styles.modalText}>Date: {date}</Text>
                <Text style={styles.modalText}>Status: {status}</Text>
              </View>
            </View>
            <View>
              <View style={styles.moreInfoBox}>
                <Text style={styles.moreInfoText}>
                  More information: {moreInfo}
                </Text>
              </View>

              <TouchableOpacity onPress={closePopup} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 200,
    marginRight: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  moreInfoBox: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  moreInfoText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PopUpDetails;
