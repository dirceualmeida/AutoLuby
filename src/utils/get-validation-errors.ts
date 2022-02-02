import {ValidationError } from "yup";

interface Errors {
    [key: string]: string
}

interface Error {
    value: any;
    path?: string;
    type?: string;
    message: string;
    errors: string[];
}

export default function getValidationErrors(err:ValidationError): Errors {
    const validationErrors: Errors = {};

    err.inner.forEach(error => {
        if (typeof error.path !== 'undefined'){
            validationErrors[error.path] = error.message;
        }
    })
    return validationErrors
}