import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import Styles from './styles';
import lock from '../../../assets/sign-up/iconpng/lock.png';
import mail from '../../../assets/sign-up/iconpng/email.png';
import show from '../../../assets/sign-up/iconpng/Group.png';

import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';


const reviewSchema = yup.object({
    Email: yup.string()
        .required()
        .test('is contain @', "Please provide a valid E mail", (val) => {
            return val?.includes('@');
        }),
    Password: yup.string()
        .required()
        .min(8)
    // .test('is atleast 8 digits in length', "Password must be atleast of 8 digits" , (val) => {
    //     return val?.length() >= 8
    // })
});

const LoginForm = ({ navigation}: any) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
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
        const url = "http://www.teamsprouts.com/api/v1/login";

        axios.post(url, value)
            .then((res) => {
                const jsonValue = JSON.stringify(res.data.data);
                AsyncStorage.setItem("@access_token", jsonValue);
                getToken();
            })
            .catch(err => console.log(err.message))

            
    }
        const getToken = async () => {
            try{
                const jsonValue = await AsyncStorage.getItem('@access_token')
                const mainToken = jsonValue != null ? JSON.parse(jsonValue) : null
                navigation.navigate("ChatList");
            }
            catch(e) {
              }
        }

    return (
        <View style={Styles.form}>
            <Text style={Styles.formHeader}>Login</Text>
            <Formik
                initialValues={{ Email: '', Password: '' }}
                validationSchema={reviewSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <View>
                        <View style={Styles.inputRow}>

                            <Image
                                style={Styles.mailImage}
                                source={mail}
                            />
                            <TextInput
                                style={Styles.phoneInput}
                                placeholder='Email ID'
                                placeholderTextColor={"#323948"}
                                value={props.values.Email}
                                onChangeText={props.handleChange('Email')}
                                onBlur={props.handleBlur('Email')}
                                textContentType='emailAddress'
                            />
                        </View>
                        <Text style={Styles.errorMessage}> {props.touched.Email && props.errors.Email} </Text>
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
                        <View style={Styles.forgetPassContainer}>
                            <Pressable onPress={onForgetPress}>
                                <Text style={Styles.forgetPassText}>Forget password ?</Text>
                            </Pressable>
                        </View>
                        <View style={Styles.signUpButtonContainer}>
                            <Pressable style={Styles.signUpButton} onPress={() => props.handleSubmit} >
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
