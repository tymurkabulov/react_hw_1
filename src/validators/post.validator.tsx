import Joi, { ValidationResult } from 'joi';
import { IPost } from '../models/IPost';

const postSchema = Joi.object<IPost>({
    title:
        Joi
            .string()
            .required()
            .messages({
        'string.base': `Title should be a type of 'text'`,
        'any.required': `Title is a required field`
    }),
    body:
        Joi
            .string()
            .required()
            .messages({
        'string.base': `Body should be a type of 'text'`,
        'any.required': `Body is a required field`
    })
});

export const validatorPost = (post: IPost): ValidationResult<IPost> => {
    return postSchema.validate(post, { abortEarly: false });
};
