import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './container/Layout';
import Wine from './container/Wine';
import Session from './container/Session';
import Checkout from './container/Checkout';
import logIn from './container/logIn';
import signUp from './container/signUp';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import { browserHistory, Router, Route } from 'react-router'
import { requireAuth, alreadyLoggedIn } from './auth';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <Route path='/wines' components={Wine} onEnter={ requireAuth } />
          <Route path='/session' components={Session}/>
          <Route path='/signUp' components={signUp} onEnter={alreadyLoggedIn}/>
          <Route path='/logIn' components={logIn} onEnter={alreadyLoggedIn}/>
          <Route path='/checkout' components={Checkout} onEnter={requireAuth} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
