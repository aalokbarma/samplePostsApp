import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import Header from '../../components/SignUp/Header';
import Entypo from 'react-native-vector-icons/Entypo';

const PostScreen = ({navigation, route}: any) => {
  const {postData} = route.params
  return (
    <View style = {Styles.postScreenContainer} testID='PostScreenContainer'>
      <View style = {Styles.postHeader}>
        <TouchableOpacity testID='PostScreenBackButton' style = {Styles.backButtonContainer} onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={50} color="#fbfbfb" />
        </TouchableOpacity>
        <Text style = {Styles.postHeaderText}>Post</Text>
      </View>
      <View style = {Styles.postContainer}>
        <View style = {Styles.contentContainer}>
          <Text style = {Styles.postHeading}>
            {postData.title}
          </Text>
          <View style = {Styles.separator} />
          <Text style = {Styles.postBody}>
            {postData.body}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PostScreen;