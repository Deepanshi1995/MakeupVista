// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SCREENS} from './screen_names';


import SplashScreen from '../screens/splash';
import ChooseScreen from '../screens/choose';
import LoginScreen from '../screens/login';
import VerifyOTPScreen from '../screens/verifyOtp';
import ProfileScreen from '../screens/profile';
import ProfileMediaScreen from '../screens/profileMedia';
import AddPhotosScreen from '../screens/addPhotos';
import DashboardScreen from '../screens/dashboard';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
      <Stack.Screen name={SCREENS.CHOOSE} component={ChooseScreen} />
      <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREENS.OTP} component={VerifyOTPScreen} />
      <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SCREENS.PROFILE_MEDIA} component={ProfileMediaScreen} />
      <Stack.Screen name={SCREENS.ADD_PHOTOS} component={AddPhotosScreen} />
      <Stack.Screen name={SCREENS.DASHBOARD} component={DashboardScreen} />
    </Stack.Navigator>
  );
}

function VendorStack() {
  
}

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigator;