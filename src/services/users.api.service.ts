// services/users.api.service.ts
import axios from 'axios';
import { IUserModel } from "../models/User";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllUsers = async (): Promise<IUserModel[]> => {
    const response = await axiosInstance.get('/users');
    return response.data.users;
}

export { getAllUsers };
