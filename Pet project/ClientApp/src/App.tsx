import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import './custom.css'

export default () => (
    <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);
