import axios from 'axios';
import { IPost } from "../models/IPost";
import { postValidator } from '../validators/post.validator';
import { SubmitHandler } from "react-hook-form";

const save: SubmitHandler<IPost> = (data) => {
    const { error } = postValidator.validate(data);

    if (error) {
        console.error(error.details[0].message);
        return;
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', data, {
        headers: {},
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};

export default save;
