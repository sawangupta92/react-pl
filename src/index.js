import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Wine from './Wine';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { browserHistory, Router, Route } from 'react-router'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <Route path='/wines' components={Wine}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
