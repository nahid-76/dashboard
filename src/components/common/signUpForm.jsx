import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
import * as userService from '../../serveces/userService';
import auth from '../../serveces/authService';
import { StyledForm,InputGroup } from './styledSignUpForm';
class SignUpForm extends Form {
    state = {
        data: { email: '', password: '' },
        errors: {},
    };
    schema = {
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
    };
    doSubmit = async () => {
        console.log("submitted");
        try {
            const response = await userService.register(this.state.data);
            auth.loginWithJwt(response.token);
            window.location = "/";

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                //username?
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }

    }
    render() {
        return (
            <>
                <StyledForm onSubmit={this.handleSubmit}>
                    <InputGroup>
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                    </InputGroup>
                    {this.renderButton('Register')}
                </StyledForm>
            </>

        );
    }
}

export default SignUpForm; 