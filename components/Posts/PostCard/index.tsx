import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import {useDispatch} from 'react-redux'
import {updatePost} from '../../../redux/action';

interface itemPropTypes{
    item:{
        item:{
            userId: number | string,
            id: number | string,
            title: string,
            body: string
        }
    },
    navigation: {
        navigate: Function
    },
}

const PostCard = ({item, navigation}: itemPropTypes) => {

  const dispatch = useDispatch()

  // following function will navigate user to post screen and as we dispatch the clicked data, so it will pass the post data into the store
  const handleUpdatePost = () => {
    navigation.navigate("Post")
    dispatch(updatePost(item))
  }

  return (
    <View style = {Styles.postCardContainer}>
      <TouchableOpacity style = {Styles.postCard} onPress={() => handleUpdatePost()}>
        <Text style = {Styles.postTitle} numberOfLines={1}>{item.item.title}</Text>
        <Text style = {Styles.postBody} numberOfLines={2}>{item.item.body}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PostCard;