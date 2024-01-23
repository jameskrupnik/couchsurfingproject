import React from 'react';
import { FlatList } from 'react-native';
import PostRow from './PostRow';
import Post from '../model/Post';
import PostData from '../data/posts';

interface PostList {
    rowPress: (post: Post) => void
}

const PostList = ({ rowPress } : PostList) => {
    return (
        <FlatList 
            data={PostData}
            renderItem={({ item }) => {
                return <PostRow 
                        rowPress={rowPress}
                        post={item} 
                        key={item.id} />
            }}
        />
    )
}

export default PostList;