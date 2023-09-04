import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Header from '../../components/SignUp/Header';
import SignupForm from '../../components/SignUp/SignupForm';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SignUpScreen = () => {

    const navigation = useNavigation();

    const onSigninPress = () => {
        navigation.navigate("Login");
    }

    return (
        <ScrollView style = {Styles.signUpScreen}>
            <Header />
            <SignupForm navigation = {navigation} />
            <View style = {Styles.bottomContainer}>
                <View style = {Styles.signinButtonContainer}>
                    <Text style = {Styles.joinedText}>Joined us before</Text>
                    <Pressable onPress={onSigninPress}>
                        <Text style = {Styles.signinText}>Sign in</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen;