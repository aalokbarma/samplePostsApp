import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';
import logo from '../../../assets/sign-up/iconpng/Group42logo.png';

const Header = () => {
    return (
        <View style = {Styles.signUpHeader}>
            <Image style = {Styles.logoImage} source={logo} />
            <Text style = {Styles.mainText}>Together Light</Text>
        </View>
    )
}

export default Header;

