import React from 'react';

import Logout from './Logout';

const Home = (props) => {
    return (
        <div>
            <Logout setIsLoggedIn={props.setIsLoggedIn} />
            Hello World!
        </div>
    )
};

export default Home;