import React, { useState } from 'react';
import { Grid, Tab, Tabs } from '@mui/material';
import Login from './Login';
import SignUp from './SignUp';

const Page = (props) => {
    const [tab, setTab] = useState('login');

    return (
        <Grid width='100vw' height='100vh' container justifyContent='center' alignItems='center' flexDirection='column'>
            <Tabs>
                <Tab label='Login' onClick={() => setTab('login')}/>
                <Tab label='Sign Up' onClick={() => setTab('signup')}/>
            </Tabs>

            {
                tab === 'login' ?
                <Login setIsLoggedIn={props.setIsLoggedIn} /> :
                <SignUp setIsLoggedIn={props.setIsLoggedIn} />
            }
        </Grid>
    );
};

export default Page;