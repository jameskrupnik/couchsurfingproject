import Friend from './Friend';

export default interface Post {
    id: number
    title: string
    description: string
    image: string
    friend: Friend
}