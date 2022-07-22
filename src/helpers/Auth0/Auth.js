import auth0 from 'auth0-js';

class Auth {
    constructor () {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-tn206lxc.us.auth0.com',
            clientID: 'LFZrYZYWwm8wdmkL40B1l8FjY6jxHl7p',
            responseType: 'token id_token',
            scope: 'openid profile email',
            redirectUri: 'http://localhost:8081/home',
        });
    };
};

const auth = new Auth;

export default auth;