import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store';

import {applyRouterMiddleware, Router, Route, browserHistory} from 'react-router';
import {useScroll} from 'react-router-scroll';

import App from './components/App';
import Detail from "./components/Detail";

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}/>
      <Route path="/topic/:id" component={Detail}/>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
