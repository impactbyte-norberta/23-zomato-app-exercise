import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail';

import PrivateRoute from './helpers/PrivateRoute';
import store from './redux/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Registration />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/restaurants/:id'>
                        <RestaurantDetail />
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
