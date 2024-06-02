import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import save from "../services/posts.api.services";
import { IPost } from "../models/IPost";

const FormComponent: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPost>();

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        id="body"
                        {...register("body", { required: "Text is required" })}
                    />
                    {errors.body && <span>{errors.body.message}</span>}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default FormComponent;
