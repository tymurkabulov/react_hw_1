import { validatorPost } from '../validators/post.validator';
import axios from 'axios';
import { IPost } from "../models/IPost";
import { SubmitHandler } from "react-hook-form";

const save: SubmitHandler<IPost> = (data) => {
    const { error } = validatorPost(data);

    if (error) {
        console.error(error);
        return;
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', data, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
};

export default save;
