// services/posts.api.service.ts
import axios from 'axios';
import { IPostModel } from "../models/Post";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getUserPosts = async (userId: number): Promise<IPostModel[]> => {
    const response = await axiosInstance.get(`/posts/user/${userId}`);
    return response.data.posts;
}

export { getUserPosts };
