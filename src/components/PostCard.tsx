import React from 'react';
import Post from '../model/Post';
import { Text, View, StyleSheet } from "react-native";
import { Card, Avatar } from '@rneui/themed';

interface PostCard {
    post: Post
    showTitle?: boolean
    showDescription?: boolean
    showImage?: boolean
}

const PostCard = (
    { 
        post, 
        showTitle = true, 
        showDescription = true, 
        showImage = true
} : PostCard) => {

    return (
        <Card>
            <View style={styles.friend}>
                <View style={styles.friendIcon}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: post.friend.icon }}
                />
                </View>
                <View style={styles.friendName}>
                <Text style={styles.avatarNameText}>{post.friend.first_name} {post.friend.last_name}</Text>
                </View>           
            </View>
            <Card.Divider />
            {
                showTitle && (
                    <Card.Title style={styles.headerTitle}>{post.title}</Card.Title>
                )
            }
            {
                showImage && (
                    <Card.Image
                        source={{
                        uri: post.image
                        }}
                    />  
                )
            }            
            {
                showDescription && (
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>{post.description}</Text>
                    </View>    
                )
            }            
        </Card>  
    )
}

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
    description: {
        marginVertical: 10
    },
    descriptionText: {

    },
    friend: {
        flexDirection: 'row',
        marginBottom: 10
    },
    friendIcon: {
        flex: .25
    },
    friendName: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: .75
    },
    headerTitle: {
        fontSize: 25,
    },
    text: {
        fontSize: 30,
    },
});

export default PostCard;