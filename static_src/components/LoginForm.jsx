import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChangeName = (e) => {
        this.setState({ username: e.target.value });
    }

    handleChangePass = (e) => {
        this.setState({ password: e.target.value });
    }

    onSubmitSend = () => {
        fetch(apiUrls.loginToken,
            {
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(this.state)
            }
        ).then(
            body => {
                if (body.ok) {
                    //return {token: 'Everthing os oK!'}
                    return body.json();
                } else {
                    return body.json().then(
                        function(err) { 
                            throw new Error(JSON.stringify(err)); 
                        })

                }
            }
        ).then(
            json => alert(json.token),
        ).catch((err) => {
            alert(err);
        }); 
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <FormControl.Static>
                        Please Login
                    </FormControl.Static>
                </FormGroup>
                <FormGroup
                    controlId="loginFormName"
                >
                    <ControlLabel>User Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={ this.state.username }
                        placeholder="Enter Name"
                        onChange={ this.handleChangeName }
                    />
                </FormGroup>
                <FormGroup
                    controlId="loginFormPassword"
                >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={ this.state.password }
                        placeholder="Enter Password"
                        onChange={ this.handleChangePass }
                    />
                </FormGroup>
                <Button 
                    onClick={ this.onSubmitSend }
                >
                    Login
                </Button>
            </form>
        );
    }
}

export default LoginForm;
