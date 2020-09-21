import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./form";
import auth from '../../serveces/authService';
import { StyledForm, InputGroup } from './styledSignUpForm';

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      console.log("submited");
      const { data } = this.state;
      //register jwt from endpoint response in to the local
      await auth.login(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        console.log("errors", errors);
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <InputGroup>
            {this.renderInput('email', 'Email', 'email')}
            {this.renderInput('password', 'Password', 'password')}
          </InputGroup>
          {this.renderButton('Login')}
        </StyledForm></>
    );
  }
}

export default LoginForm;
