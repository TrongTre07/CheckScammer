// FloatingButton.js

import React from 'react';
import { TouchableOpacity, Modal, View, TextInput, Text, StyleSheet } from 'react-native';

const FloatingButton = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [bankName, setBankName] = React.useState('');
  const [bankNumber, setBankNumber] = React.useState('');
  const [additionalInfo, setAdditionalInfo] = React.useState('');

  const handleDenunciationSubmit = () => {
    setModalVisible(false);
    // Implement logic to submit denunciation data to the server
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Bank's name"
              value={bankName}
              onChangeText={setBankName}
            />
            <TextInput
              style={styles.input}
              placeholder="Bank's number"
              value={bankNumber}
              onChangeText={setBankNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Additional information"
              value={additionalInfo}
              onChangeText={setAdditionalInfo}
            />
            <TouchableOpacity onPress={handleDenunciationSubmit} style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.floatingButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  floatingButton: {
    backgroundColor: '#2979FF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#2979FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
});

export default FloatingButton;
