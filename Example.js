import React from 'react';
import {Router, Scene} from 'react-native-mobx';

// view and model for Counter scene
import Counter from './components/Counter';
import store from './model/counter';

export default () =>
    <Router store={store}>
        <Scene key="launch" component={Counter} hideNavBar/>
    </Router>
