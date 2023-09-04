import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SignupScreen from '../Screens/SignupScreen';
import LoginScreen from '../Screens/LoginScreen';
import PostScreen from '../Screens/PostScreen';

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations;