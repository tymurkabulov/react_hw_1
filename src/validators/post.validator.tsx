import Joi from 'joi';
import { IPost } from '../models/IPost';

export const postValidator = Joi.object<IPost>({
    userId:
        Joi
            .number()
            .max(10)
            .required()
            .messages({
                'number.base': `User ID should be a type of 'number'`,
                'number.max': `User ID should be less than or equal to 10`,
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


