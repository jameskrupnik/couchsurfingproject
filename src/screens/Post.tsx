import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from "react-native";
import PostCard from "../components/PostCard";
import { StackNavigatorParamList } from '../types';

type PostProps = NativeStackScreenProps<StackNavigatorParamList, 'Post'>;

const PostScreen = ({ route } : PostProps) => {
    return (
        <ScrollView>
            <PostCard post={route.params.post} />         
        </ScrollView>
    );
};

export default PostScreen;