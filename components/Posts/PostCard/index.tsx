import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';

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
  return (
    <View style = {Styles.postCardContainer}>
      <TouchableOpacity style = {Styles.postCard} onPress={() => navigation.navigate("Post", {postData: item.item})}>
        <Text style = {Styles.postTitle} numberOfLines={1}>{item.item.title}</Text>
        <Text style = {Styles.postBody} numberOfLines={2}>{item.item.body}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PostCard;