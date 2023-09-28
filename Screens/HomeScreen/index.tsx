import { View, Text, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Header from '../../components/SignUp/Header';
import PostCard from '../../components/Posts/PostCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import { getPostsList } from '../../redux/action';

const HomeScreen = ({navigation}: any) => {

  const dispatch = useDispatch();

  // In following line we get the posts data from reducer.
  const reduxPostsData = useSelector((state: any) => state.reducer);
  const updatedPostsData = reduxPostsData[0];

  // Here we are calling getPostsLists action whenever this home screen mounts
  useEffect(() => {
    dispatch(getPostsList());
  });

  return (
    <View style = {Styles.homeScreen} testID='HomeScreenContainer'>
      <Header />
        {
          updatedPostsData?.length > 0 ? 
            <FlatList 
              data={updatedPostsData}
              keyExtractor={({item, index}) => index}
              renderItem={(item) => <PostCard item = {item} navigation= {navigation} />}
            />
            : 
            <View style = {Styles.nothingComponentContainer}>
              <MaterialCommunityIcons name="checkbox-blank-off-outline" size={55} color="#999" />
              <Text style = {Styles.noDataText}>Nothing to show.</Text>
            </View>
        } 
    </View>
  )
}

export default HomeScreen;