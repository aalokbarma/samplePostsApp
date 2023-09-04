import React from 'react';
import { View, Text, Pressable } from 'react-native';
import LoginForm from '../../components/LogIn/LoginForm';
import Header from '../../components/SignUp/Header';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

interface loginScreenTypes{
    navigation: {
        navigate: Function
    }
}

const LoginScreen = ({navigation}: loginScreenTypes) => {

    const onRegisterPress = () => {
        navigation.navigate('Signup');
    }

    return (
        <ScrollView style = {Styles.loginScreen}>
            <Header />
            <LoginForm navigation={navigation}/>
        </ScrollView>
    )
}

export default LoginScreen;