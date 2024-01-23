import Post from '../model/Post';

export type StackNavigatorParamList = {
    Profile: undefined,
    Posts: undefined,
    Post: {
      post: Post
    }
}