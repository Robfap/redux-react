import configureStore from './store/configureStore';
import Root from './components/Root.jsx';
import React from 'react';
import { render } from 'react-dom';

render(
  <Root store={configureStore} />,
  document.getElementById('app-root')
);
