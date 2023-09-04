import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import Styles from './styles';
import phone from '../../../assets/sign-up/iconpng/phone.png';
import lock from '../../../assets/sign-up/iconpng/lock.png';
import mail from '../../../assets/sign-up/iconpng/email.png';
import show from '../../../assets/sign-up/iconpng/Group.png';

import axios from 'axios';

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    Phone: yup.number()
        .required()
        .min(10),
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

const SignupForm = ({navigation}: any) => {

    const [mob, setMob] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [securePass, setSecurePass] = useState(true);

    const onLockPress = () => {
        if(securePass == true){
            setSecurePass(false)
        } else{
            setSecurePass(true)
        }
    };

    const onSubmit = async (value: any, actions: any) => {
        const url = "http://www.teamsprouts.com/api/v1/register";
        console.log(url);
        
        axios.post(url, value)
            .then((res) => {
                Alert.alert("User Registered Successfully. \n Please Login to use the app.")
                navigation.navigate("Login")
            })
            .catch(err => console.log(err.message))
    }

    return (
        <View style = {Styles.form}>
            <Text style = {Styles.formHeader}>Create your account</Text>

            <Formik 
                initialValues = {{Phone: '', Email: '', Password: ''}}
                validationSchema = {reviewSchema}
                onSubmit = {onSubmit}                
            >
                {(props) => (
                    <View>
                        <View style = {Styles.inputRow}>
                            <Image
                                style = {Styles.phoneImage}
                                source={phone}
                            />
                            <TextInput 
                                style = {Styles.phoneInput}
                                placeholder='Phone'
                                placeholderTextColor={"#323948"}
                                value= {props.values.Phone}
                                onChangeText = {props.handleChange('Phone')}
                                onBlur={props.handleBlur('Phone')}
                                textContentType='telephoneNumber'
                            />
                        </View>
                        <Text style = {Styles.errorMessage}> { props.touched.Phone && props.errors.Phone} </Text>
                        <View style = {Styles.inputRow}>
                            <Image
                                style = {Styles.mailImage}
                                source={mail}
                            />
                            <TextInput 
                                style = {Styles.phoneInput}
                                placeholder='Email ID'
                                placeholderTextColor={"#323948"}
                                value= {props.values.Email}
                                onChangeText = {props.handleChange('Email')}
                                onBlur={props.handleBlur('Email')}
                                textContentType='emailAddress'
                            />
                        </View>
                        <Text style = {Styles.errorMessage}> { props.touched.Email && props.errors.Email} </Text>
                        <View style = {Styles.inputRow}>
                            <Image
                                style = {Styles.lockImage}
                                source={lock}
                            />
                            <View style = {Styles.passwordContainer}>
                                <TextInput 
                                    style = {Styles.phoneInput}
                                    placeholder='Password'
                                    placeholderTextColor={"#323948"}
                                    value= {props.values.Password}
                                    onChangeText = {props.handleChange('Password')}
                                    onBlur={props.handleBlur('Password')}
                                    textContentType='password'
                                    secureTextEntry = {securePass}
                                />
                                <Pressable onPress={onLockPress}>
                                    <Image
                                        style = {Styles.lockImage}
                                        source={show}
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <Text style = {Styles.errorMessage}> { props.touched.Password && props.errors.Password} </Text>
                        <View style = {Styles.signUpButtonContainer}>
                            <Pressable style = {Styles.signUpButton} onPress={props.handleSubmit} >
                                <Text style = {Styles.signUpText}>Sign Up</Text>
                            </Pressable>
                        </View>
                    </View>
                    
                )}

            </Formik>
        </View>
    )
}

export default SignupForm;
