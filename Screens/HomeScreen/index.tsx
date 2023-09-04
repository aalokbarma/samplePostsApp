import { View, Text, ActivityIndicator, FlatList, RefreshControl, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Header from '../../components/SignUp/Header';
import PostCard from '../../components/Posts/PostCard';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const HomeScreen = ({navigation}: any) => {

  const [postsData, setPostsData]= useState([]);
  const [dataFetching, setDataFetching] = useState(true);

  async function fetchData() {
    setDataFetching(true)
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPostsData(response.data);
      setDataFetching(false);
    } catch (error) {
      Alert.alert("Error!", "Data can not be fetched.")
      setDataFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <View style = {Styles.homeScreen} testID='HomeScreenContainer'>
      <Header />
      {
        dataFetching ? <ActivityIndicator /> : 
        <>
        {
          postsData.length > 0 ? 
            <FlatList 
              data={postsData}
              keyExtractor={({item, index}) => index}
              renderItem={(item) => <PostCard item = {item} navigation= {navigation} />}
              refreshControl={
                <RefreshControl
                  refreshing={dataFetching}
                  onRefresh={fetchData}
                  colors={['#1A5EDE']}
                />
              }
            />
            : 
            <View style = {Styles.nothingComponentContainer}>
              <MaterialCommunityIcons name="checkbox-blank-off-outline" size={55} color="#999" />
              <Text style = {Styles.noDataText}>Nothing to show.</Text>
            </View>
        }
        <TouchableOpacity testID='HomeScreenRefreshButton' style = {Styles.refreshButton} onPress={() => fetchData()}>
          <Foundation name="refresh" size={40} color="#fbfbfb" />
        </TouchableOpacity>
        </>
      }
      
      
    </View>
  )
}

export default HomeScreen;