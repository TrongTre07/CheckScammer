import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import instance from '../../axios/AxiosInstance';

import { useMyContext } from '../MyContext';

const PopUpDetails = ({ modalVisible, openModal, closeModal, selectedItem }) => {
  // ({ modalVisible, openModal, closeModal, phoneNumber, name, bankNumber, bankName, date, status, moreInfo })
  const {
    images,
    name,
    phonenumber,
    bankname,
    banknumber,
    date,
    status,
    detail,
    _id
  } = selectedItem;
  const closePopup = () => {
    closeModal();
  };
  const { userData } = useMyContext();

  const username = userData.username;

  const isAcceptReport = (_id,status)=>{
    console.log(_id);
    instance
        .post(`product/set-status/${_id}`, {status:{number:status.number,text:status.text}})
        .then(response => {
         
          if (response.data.result == true) {
            // toastSuccess();
            ToastAndroid.show(`${status.text} thành công`, ToastAndroid.SHORT);
            closePopup();
          } else {
          }
        })
        .catch(error => {
          console.log('ERROR: ', error.message);
        });
  }

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity> */}

      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* <Image style={styles.image} source={{uri: image}} /> */}
              <View>
                <Text style={styles.modalHeader}>Thông tin tố cáo</Text>
                <Text style={styles.modalText}>SDT: {phonenumber}</Text>
                <Text style={styles.modalText}>Tên: {name}</Text>
                <Text style={styles.modalText}>Số NH: {banknumber}</Text>
                <Text style={styles.modalText}>Tên NH: {bankname}</Text>
                <Text style={styles.modalText}>Ngày: {date}</Text>
                <Text style={styles.modalText}>Trạng thái: {status.text}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <View style={styles.moreInfoBox}>
                <Text style={styles.moreInfoText}>
                  Chi tiết: {detail}
                </Text>
              </View>
            </View>
            {username === 'admin' ?
                <View style={{width:'100%',height:70,flexDirection:'row'}}>

                  <TouchableOpacity onPress={()=>isAcceptReport(_id,{number:2,text:'Đã duyệt'})} style={[styles.btn,{backgroundColor:'blue'}]}>
                    <Text style={styles.closeButtonText}>Xác nhận</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=> isAcceptReport(_id,{number:3,text:'Đã hủy'})} style={[styles.btn,{backgroundColor:'red'}]}>
                    <Text style={styles.closeButtonText}>Hủy đơn</Text>
                  </TouchableOpacity>
                </View>
                :

                <TouchableOpacity onPress={closePopup} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Đóng</Text>
                </TouchableOpacity>
              }
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
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F4A71',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#3F4A71'

  },
  moreInfoBox: {
    backgroundColor: '#E0EAFF',
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
    width: 300,
    height: 150,

  },
  moreInfoText: {
    fontSize: 16,
    color: '#3F4A71'

  },
  btn: {
    alignItems: 'center',
    width: '30%',
    marginVertical: 10,
    padding: 10,
    marginHorizontal:'10%',
    borderRadius: 5,
  },
  closeButton: {
    alignItems: 'center',
    width: '25%',
    marginTop: 20,
    backgroundColor: '#112E93',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,

  },
});

export default PopUpDetails;
