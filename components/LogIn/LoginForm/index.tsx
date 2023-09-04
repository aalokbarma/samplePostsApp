import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import Styles from './styles';
import lock from '../../../assets/sign-up/iconpng/lock.png';
import phone from '../../../assets/sign-up/iconpng/phone.png';
import show from '../../../assets/sign-up/iconpng/Group.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    Username:  yup.string()
        .required()
        .min(3),
    Password: yup.string()
        .required()
        .min(8)
    // .test('is atleast 8 digits in length', "Password must be atleast of 8 digits" , (val) => {
    //     return val?.length() >= 8
    // })
});

interface loginFormTypes{
    navigation: {
        navigate: Function,
        push: Function
    }
}

const LoginForm = ({ navigation}: any) => {
    const [securePass, setSecurePass] = useState(true);

    const onForgetPress = () => {
        navigation.navigate('ForgetPassword');
    };

    const onLockPress = () => {
        if (securePass == true) {
            setSecurePass(false)
        } else {
            setSecurePass(true)
        }
    };

    const onSubmit = async (value: any, actions: any) => {
        // console.warn("Value => " + JSON.stringify(value));

        if(value.Username == "Together" && value.Password == "Test@123"){
            Alert.alert('Success', 'Login Successful', [
                {
                  text: 'OK',
                  onPress: () => navigation.push('Home'),
                  style: 'cancel',
                },
                
              ]);
            value.Username = "";
            value.Password = "";
        }
        else {
            Alert.alert('Login Failed', 'Kindly check your Username and Password');
        }
    }

    return (
        <View style={Styles.form}>
            <Text style={Styles.formHeader}>Login</Text>
            <Formik
                initialValues={{Username: '', Password: '' }}
                validationSchema={reviewSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <View>
                        <View style = {Styles.inputRow}>
                        <FontAwesome name="user-o" size={24} color="#555" />
                            <TextInput 
                                style = {Styles.phoneInput}
                                placeholder='Username'
                                placeholderTextColor={"#323948"}
                                value= {props.values.Username}
                                onChangeText = {props.handleChange('Username')}
                                onBlur={props.handleBlur('Username')}
                            />
                        </View>
                        <Text style = {Styles.errorMessage}> { props.touched.Username && props.errors.Username} </Text>
                        <View style={Styles.inputRow}>
                            <Image
                                style={Styles.lockImage}
                                source={lock}
                            />
                            <View style={Styles.passwordContainer}>
                                <TextInput
                                    style={Styles.phoneInput}
                                    placeholder='Password'
                                    placeholderTextColor={"#323948"}
                                    value={props.values.Password}
                                    onChangeText={props.handleChange('Password')}
                                    onBlur={props.handleBlur('Password')}
                                    textContentType='password'
                                    secureTextEntry={securePass}
                                />
                                <Pressable onPress={onLockPress}>
                                    <Image
                                        style={Styles.lockImage}
                                        source={show}
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <Text style={Styles.errorMessage}> {props.touched.Password && props.errors.Password} </Text>
                        <View style={Styles.signUpButtonContainer}>
                            <Pressable style={Styles.signUpButton} onPress={() => props.handleSubmit()} >
                                <Text style={Styles.signUpText}>Login</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </Formik>


        </View>
    )
}

export default LoginForm;
