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
import DetailsNumber from '../screens/DetailsNumber';
import AddNumberReport from '../screens/AddNumberReport';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const StackWelcome = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <StackWelcome.Navigator screenOptions={{headerShown: false}}>
      <StackWelcome.Screen name="Welcome" component={Welcome} />
      <StackWelcome.Screen name="AppNavigation" component={HomeNavigation} />
      <StackWelcome.Screen name="Login" component={Login} />
      <StackWelcome.Screen name="Register" component={Register} />
      <StackWelcome.Screen name="ChangePassword" component={ChangePassword} />

    </StackWelcome.Navigator>
  );
};


const HomeNavigation = () => {
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
            <Text style={{color: focused ? '#447EF2' : 'grey'}}>Home</Text>
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
            <Text style={{color: focused ? '#447EF2' : 'grey'}}>Lịch sử</Text>
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
            <Text style={{color: focused ? '#447EF2' : 'grey'}}>Tài khoản</Text>
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
      <Stack.Screen name="Details" component={DetailsNumber} />
      <Stack.Screen name="AddReport" component={AddNumberReport} />
    </Stack.Navigator>
  );
};

const UserInformation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="User" component={UserInfo} />
      <Stack.Screen name="MyProfile" component={MyProfile}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
