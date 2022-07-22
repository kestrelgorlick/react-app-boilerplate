import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Grid, Typography, TextField } from '@mui/material';

import { auth } from '../../helpers';
import { login } from '../../redux';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    };

    handleSubmit (e) {
        e.preventDefault();

        auth.auth0.login({
            realm: 'Username-Password-Authentication',
            username: this.state.username,
            password: this.state.password,
        });

        localStorage.setItem("Authenticated", JSON.stringify(true));
        this.props.setIsLoggedIn(true);
    };

    handleChange (e) {
        const value = e.target.value;
        this.setState({ [e.target.id]: value });
    }

    render () {
        return (
            <Grid container justifyContent='center' alignItems='center' flexDirection='column'>
                <Typography variant='h2' style={{marginBottom: '4px'}}>
                    Log In
                </Typography>

                <form
                    onSubmit={(e) => this.handleSubmit(e)}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <TextField
                        id='username'
                        variant='outlined'
                        label='Username'
                        onChange={(e) => this.handleChange(e)}
                        style={{marginBottom: '8px'}}
                    />

                    <TextField
                        id='password'
                        variant='outlined'
                        label='Password'
                        onChange={(e) => this.handleChange(e)}
                        style={{marginBottom: '8px'}}
                    />

                    <Button variant='contained' color='primary' type='submit'>
                        Submit
                    </Button>
                </form>
            </Grid>
        );
    };
};

const mapDispatch = (dispatch) => ({
    dispatchLogin: () => dispatch(login()),
})

export default connect(null, mapDispatch)(Login);