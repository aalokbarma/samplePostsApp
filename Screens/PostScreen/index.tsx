import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

const PostScreen = ({navigation}: any) => {
  
  // here we are getting the posts data from the store
  const postReduxData = useSelector((state: any) => state.reducer)
  const postData = postReduxData[0]
  
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
            {postData[0]?.title}
          </Text>
          <View style = {Styles.separator} />
          <Text style = {Styles.postBody}>
            {postData[0]?.body}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PostScreen;