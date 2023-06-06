import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/app/screens/HomeScreen';
import PhoneNumberDetailsScreen from './src/app/screens/History';
import BottomNavigation from './src/app/screens/BottomNavigation';
import FloatingButton from './src/app/screens/FloatingButton';
// import AppNavigation from './src/app/navigation/appNavigation'
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/app/navigation/appNavigation';
import {MyContextProvider} from './src/app/MyContext';
import UserInfo from './src/app/screens/UserInfo';
import History from './src/app/screens/History';
import PopUpDetails from './src/app/screens/PopUpDetails';
import Login from './src/app/screens/Login';
import ChangePassword from './src/app/screens/ChangePassword';
import Register from './src/app/screens/Register';
import MyProfile from './src/app/screens/MyProfile';
import DetailsNumber from './src/app/screens/DetailsNumber';
import AddNumberReport from './src/app/screens/AddNumberReport';

const App = () => {
  return (
    // <HomeScreen/>

    <NavigationContainer>
      <MyContextProvider>
        <AppNavigation />
      </MyContextProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
