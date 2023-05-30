import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PhoneNumberDetailsScreen from '../screens/History';
import UserInfo from '../screens/UserInfo';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeAndDetails} />
      {/* <Tab.Screen name="AllNumber" component={SettingsScreen} /> */}
      <Tab.Screen name="UserInfo" component={UserInfo} />
    </Tab.Navigator>
  );
}

const HomeAndDetails = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Homepage" component={HomeScreen}/> 
      <Stack.Screen name="Details" component={PhoneNumberDetailsScreen}/> 
    </Stack.Navigator>
  )
}

export default AppNavigation


