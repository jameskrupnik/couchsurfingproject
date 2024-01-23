import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from "react-native";
import PostList from '../components/PostList';
import { StackNavigatorParamList } from '../types';
import Post from '../model/Post';

type PostsProps = NativeStackScreenProps<StackNavigatorParamList, 'Posts'>;

const Posts = ({ navigation } : PostsProps) => {

  const rowPress = (post: Post) => {
      navigation.navigate('Post', {
          post
      });
  };

  return (
    <View>
        <PostList rowPress={rowPress} />
    </View>
  );
};

export default Posts;