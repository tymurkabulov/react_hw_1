import React, { FC } from "react";
import { useForm } from "react-hook-form";
import save from "../services/posts.api.services";
import { IPost } from "../models/IPost";
import { postValidator } from "../validators/post.validator";
import { joiResolver } from '@hookform/resolvers/joi';

const FormComponent: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPost>({
        resolver: joiResolver(postValidator),
    });

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor="userId">User ID</label>
                    <input
                        id="userId"
                        type="number"
                        {...register("userId")}
                    />
                    {errors.userId && <span>{errors.userId.message}</span>}
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        {...register("title")}
                    />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        id="body"
                        {...register("body")}
                    />
                    {errors.body && <span>{errors.body.message}</span>}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default FormComponent;
