import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFoundPage} />
                </Switch>
        </BrowserRouter>
    )
}

export default App;