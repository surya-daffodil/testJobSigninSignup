import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Home from './components/home.jsx';

import './validationRules.jsx'; //TODO
const store = createStore(reducers);
ReactDom.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route name="signup" path="/signup" component={Signup} />
			<Route name="login" path="/login" component={Login} />
			<Route name="home" path="/" component={Home} />
		</Router>
	</Provider>
), document.getElementById('app'));