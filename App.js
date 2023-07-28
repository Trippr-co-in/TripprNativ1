import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SwiperScreen from './SwiperScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import PickDropLocation from './screens/PickDropLocation';
import Cars from './screens/Cars';
import CarDetails from './screens/CarDetails';
import Homestay from './screens/Homestay';
import HomestayDetail from './screens/HomestayDetail';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLogo from './screens/HomeLogo';

const Stack = createStackNavigator();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log(token)
      if (token !== null) {
        setLoggedIn(true);
      }
    };
    fetchToken();
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5}  /> */}
        {splashScreen && <Stack.Screen name="HomeLogo" component={HomeLogo} />}
        {!loggedIn && (
          <>
            <Stack.Screen name="Swiper" component={SwiperScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PickDropLocation" component={PickDropLocation} />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="Homestay" component={Homestay} />
        <Stack.Screen name="HomestayDetail" component={HomestayDetail} />

        {loggedIn && (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
