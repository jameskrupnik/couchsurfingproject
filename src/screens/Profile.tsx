import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Button, Card } from '@rneui/base';
import PostCard from '../components/PostCard';
import UserData from '../data/user';
import PostData from '../data/posts';
import { StackNavigatorParamList } from '../types';

type ProfileProps = NativeStackScreenProps<StackNavigatorParamList, 'Profile'>;

const Profile = ({ navigation } : ProfileProps) => {

  const recent = PostData[0];
  
  const onPress = () => {
    navigation.navigate('Posts');
  }

  return (
    <ScrollView>
      <Card>
        <View style={styles.avatarView}>
          <Avatar
            size={64}
            rounded
            source={{ uri: UserData.icon }}
          />   
        </View>   
        <View style={styles.avatarViewTitle}>
          <Card.Title style={styles.avatarNameText}>{UserData.first_name} {UserData.last_name}</Card.Title>            
        </View>    
      </Card> 
      <View style={styles.recentPosts}>
        <TouchableOpacity style={styles.recentPostTitle} onPress={onPress}>
          <Card.Title style={styles.headerTitle}>Recent Posts</Card.Title>
        </TouchableOpacity>        
        <PostCard post={recent} showTitle={true} showDescription={false} />  
        <Button
          style={styles.recentPostViewMoreButton}
          onPress={onPress}
          title="View More Posts"
        />   
      </View>                    
    </ScrollView>        
  );
};

const styles = StyleSheet.create({
  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarViewTitle: {
    marginTop: 10
  },
  avatarNameText: {
    fontSize: 20
  },
  headerTitle: {
    fontSize: 25,
  },
  recentPosts: {
    marginTop: 10,
  },
  recentPostTitle: {
    marginTop: 20
  },
  recentPostViewMoreButton: {
    marginVertical: 10,
    marginHorizontal: 15
  }
});

export default Profile;