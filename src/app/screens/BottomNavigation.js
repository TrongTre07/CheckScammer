// BottomNavigation.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Implement navigation logic based on the selected tab
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleTabChange('home')}>
        <Text style={activeTab === 'home' ? styles.activeTabText : styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabChange('scamNumbers')}>
        <Text style={activeTab === 'scamNumbers' ? styles.activeTabText : styles.tabText}>
          Scam Numbers
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabChange('userInfo')}>
        <Text style={activeTab === 'userInfo' ? styles.activeTabText : styles.tabText}>
          User Information
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 16,
    color: '#888888',
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default BottomNavigation;
