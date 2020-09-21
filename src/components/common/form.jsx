import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import {FormButton } from './styledSignUpForm'
class Form extends Component {
    state = {
        data: {},
        errors: {}
    }
    //validate entire form
    validate = () => {
        const options = { abortEarly: false };
        //joi validate method
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;

    }
    //validate specfic input
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    }
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    }
    renderButton(label) {
        return <FormButton disabled={this.validate()}>{label}</FormButton>
    }
    renderInput(name,label,type) {
        const { data, errors } = this.state;
        return (
            <Input
                type={type}
                name={name}
                label={label}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )

    }
 
}

export default Form;