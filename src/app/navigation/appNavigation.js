import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PhoneNumberDetailsScreen from '../screens/History';
import UserInfo from '../screens/UserInfo';
import History from '../screens/History';
import {Image, Text} from 'react-native';
import Login from '../screens/Login';
import ChangePassword from '../screens/ChangePassword';
import Register from '../screens/Register';

import {useNavigation, useLayoutEffect} from '@react-navigation/native';
import MyProfile from '../screens/MyProfile';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeAndDetails}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Image
              style={{width: 24, height: 24}}
              source={
                focused
                  ? require('../../media/iconNavigate/homePressed.png')
                  : require('../../media/iconNavigate/home.png')
              }
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'blue' : 'grey'}}>Home</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Image
              style={{width: 24, height: 24}}
              source={
                focused
                  ? require('../../media/iconNavigate/historyPressed.png')
                  : require('../../media/iconNavigate/history.png')
              }
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'blue' : 'grey'}}>Lịch sử</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UserInformation"
        component={UserInformation}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Image
              style={{width: 24, height: 24}}
              source={
                focused
                  ? require('../../media/iconNavigate/profilePressed.png')
                  : require('../../media/iconNavigate/profile.png')
              }
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'blue' : 'grey'}}>Tài khoản</Text>
          ),
          headerShown: false,
          // headerTitleAlign: 'center',
          // headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          // headerStyle: {backgroundColor: '#34cceb', height: 50},
          // headerTitle: 'Tôi',
        }}
      />
    </Tab.Navigator>
  );
};

const HomeAndDetails = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homepage" component={HomeScreen} />
      <Stack.Screen name="Details" component={PhoneNumberDetailsScreen} />
    </Stack.Navigator>
  );
};

const UserInformation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="User" component={UserInfo} />
      <Stack.Screen name="MyProfile" component={MyProfile}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
