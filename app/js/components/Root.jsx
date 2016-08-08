import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp.jsx';
import { Router, Route, browserHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;