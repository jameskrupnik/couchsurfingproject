import React from "react";
import { TouchableOpacity } from "react-native";
import Post from '../model/Post';
import PostCard from "./PostCard";

interface PostRow {
    post: Post
    rowPress: (post: Post) => void
}

const PostRow = ({ post, rowPress } : PostRow) => {
  return (
    <TouchableOpacity onPress={() =>rowPress(post)}>
        <PostCard post={post} showTitle={false} showDescription={false} />
    </TouchableOpacity>
  );
};

export default PostRow;