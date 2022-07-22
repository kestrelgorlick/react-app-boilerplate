import React, { Component } from 'react';
import { Button, Grid, Typography, TextField } from '@mui/material';

import { auth } from '../../helpers';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
        };

        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    };

    handleSubmit () {
        auth.auth0.redirect.signupAndLogin(
            {
                connection: 'Username-Password-Authentication',
                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                userMetadata: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                }
            },
            () => {
                localStorage.setItem("Authenticated", JSON.stringify(true));
                console.log('it works!')
            }
        );
    };

    handleChange (e) {
        const value = e.target.value;
        this.setState({ [e.target.id]: value });
    };

    render () {
        return (
            <Grid container justifyContent='center' alignItems='center' flexDirection='column'>
                <Typography variant='h2' style={{marginBottom: '4px'}}>
                    Sign Up
                </Typography>

                <div
                    onSubmit={(e) => this.handleSubmit(e)}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <TextField
                        id='firstName'
                        variant='outlined'
                        label='First Name'
                        onChange={(e) => this.handleChange(e)}
                        style={{marginBottom: '8px'}}
                    />

                    <TextField
                        id='lastName'
                        variant='outlined'
                        label='Last Name'
                        onChange={(e) => this.handleChange(e)}
                        style={{marginBottom: '8px'}}
                    />

                    <TextField
                        id='email'
                        variant='outlined'
                        label='Email'
                        onChange={(e) => this.handleChange(e)}
                        style={{marginBottom: '8px'}}
                    />

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

                    <Button variant='contained' color='primary' onClick={() => this.handleSubmit()}>
                        Submit
                    </Button>
                </div>
            </Grid>
        );
    };
};

export default SignUp;