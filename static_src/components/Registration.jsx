import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';

class Registration extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    }

    static defaultProps = {
        text: 'Looks like you not posted text',
    }

    state = {
        taskList: [],
    }

    componentDidMount() {
        fetch(apiUrls.tasks, {
            credentials: 'include',
        }).then(
            body => body.json(),
        ).then(
            json => this.setState({ taskList: json.results }),
        ); 
    }

    render() {
        return (
            <div>
                <h1>Registration Header</h1>
                <p>What this is ? { this.props.text } </p>
            </div>
        );
    }
}

export default Registration;
