import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import PrivateRoute from './helpers/PrivateRoute';
import store from './redux/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <PrivateRoute exact path='/home'>
                        <Home />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
