import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithRouter from './AppWithRouter';
import * as serviceWorker from './serviceWorker';

import createAuth0Client from '@auth0/auth0-spa-js'

async function initAuth0() {
    const auth0 = await createAuth0Client({
        domain: 'morozec.auth0.com',
        client_id: 'c56Pm3348co0jt72HPrCij9pR5DU7YKl',
        redirect_uri: 'http://localhost:3000/profile'
    })
    return auth0
}

initAuth0().then(auth0 => ReactDOM.render(<AppWithRouter auth0={auth0}/>, document.getElementById('root')))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
