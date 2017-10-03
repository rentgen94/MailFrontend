import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';

class Registration extends React.Component {
    // static propTypes = {
    //     userName: PropTypes.string,
    //     userPassword: PropTypes.string,
    // }

    // static defaultProps = {
    //     userName: 'Looks like you not posted text',
    // }

    // state = {
    //     userName: '',
    //     userPassword: ''
    // }

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
        fetch(apiUrls.users,
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
                    return body.json();
                } else {
                    return body.json().then(
                        function(err) { 
                            throw new Error(JSON.stringify(err)); 
                        })

                }
            }
        ).then(
            json => alert(json),
        ).catch((err) => {
            alert(err);
        }); 
    }


    // componentDidMount() {
    //     fetch(apiUrls.tasks, {
    //         credentials: 'include',
    //     }).then(
    //         body => body.json(),
    //     ).then(
    //         json => this.setState({ taskList: json.results }),
    //     ); 
    // }

    render() {
        return (
            // <div>
            //     <h1>Registration Header</h1>
            //     <p>What this is ? { this.props.text } </p>
            // </div>
            <form>
                <FormGroup
                    controlId="registerFormName"
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
                    controlId="registerFormPassword"
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
                    Sign Up
                </Button>
            </form>
        );
    }
}

export default Registration;
