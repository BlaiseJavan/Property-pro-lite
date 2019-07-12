import Joi from 'joi';

    const userSchema = Joi.object().keys({
        id: Joi.number().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        address: Joi.string().alphanum().min(2).required(),
        phoneNumber: Joi.string().min(2).required(),
        password: Joi.string().required(),
        isAdmin: Joi.boolean().required(),
        created_on: Joi.date().required()
    });

export default userSchema;