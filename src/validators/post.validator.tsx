import Joi from 'joi';
import { IPost } from '../models/IPost';

export const postValidator = Joi.object<IPost>({
    userId:
        Joi
            .number()
            .required()
            .messages({
                'number.base': `User ID should be a type of 'number'`,
                'any.required': `User ID is a required field`
            }),
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


