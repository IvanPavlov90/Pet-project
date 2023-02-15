import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

export default () => (
    <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);
