// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    role: yup
        .string()
        .oneOf(['instructor', 'student', 'alumni'], 'Must choose a role'),
    civil: yup
        .string()
        .oneOf(['single', 'married'], 'Civil status is required'),
    hiking: yup.boolean(),
    reading: yup.boolean(),
    coding: yup.boolean()
})

export default formSchema;