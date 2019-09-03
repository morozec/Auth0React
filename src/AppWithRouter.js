import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import App from './App'

const AppWithRouter = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/profile" render = {() => <Profile {...props} />} />
                <Route path="/" render={() => <App {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppWithRouter