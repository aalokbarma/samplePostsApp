import React from 'react';
import { View, Text, Pressable } from 'react-native';
import LoginForm from '../../components/LogIn/LoginForm';
import Header from '../../components/SignUp/Header';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = () => {

    const navigation = useNavigation();

    const onRegisterPress = () => {
        navigation.navigate('Signup');
    }

    return (
        <ScrollView style = {Styles.loginScreen}>
            <Header />
            <LoginForm navigation={navigation} addItems={undefined} modelling={undefined} />
            <View style = {Styles.bottomContainer}>
                <View style = {Styles.signinButtonContainer}>
                    <Text style = {Styles.joinedText}>Don't have an account</Text>
                    <Pressable onPress={onRegisterPress}>
                        <Text style = {Styles.signinText}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginScreen;