import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '@mui/material';

import { logout } from '../redux';

class LogOut extends Component {
    constructor (props) {
        super(props);

        this.handleLogout.bind(this);
    };

    handleLogout () {
        sessionStorage.setItem('Authenticated', JSON.stringify(false));
        this.props.setIsLoggedIn(false);
    };

    render () {
        return (
            <Button variant='contained' color='primary' onClick={() => this.handleLogout()}>
                Log Out
            </Button>
        );
    };
};

const mapDispatch = (dispatch) => ({
    dispatchLogout: () => dispatch(logout())
});

export default connect(null, mapDispatch)(LogOut);