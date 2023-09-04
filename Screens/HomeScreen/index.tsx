import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Header from '../../components/SignUp/Header';
import PostCard from '../../components/Posts/PostCard';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}: any) => {

  const [postsData, setPostsData]= useState([]);
  const [dataFetching, setDataFetching] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // Handle the successful response here
      // console.warn("ResponseData => " + JSON.stringify(response.data));
      setPostsData(response.data);
      setDataFetching(false);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
      setDataFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <View style = {Styles.homeScreen}>
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
            />
            : 
            <View style = {Styles.nothingComponentContainer}>
              <MaterialCommunityIcons name="checkbox-blank-off-outline" size={55} color="#999" />
              <Text style = {Styles.noDataText}>Nothing to show.</Text>
            </View>
        }
        </>
      }
      
      
    </View>
  )
}

export default HomeScreen;