import React from 'react';
import { ScrollView } from 'react-native';
import LoginForm from '../../components/LogIn/LoginForm';
import Header from '../../components/SignUp/Header';
import Styles from './styles';

interface loginScreenTypes{
    navigation: {
        navigate: Function
    }
}

const LoginScreen = ({navigation}: loginScreenTypes) => {

    return (
        <ScrollView style = {Styles.loginScreen} testID='LoginScreenContainer'>
            <Header />
            <LoginForm navigation={navigation}/>
        </ScrollView>
    )
}

export default LoginScreen;