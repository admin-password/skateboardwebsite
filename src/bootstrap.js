import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Tutorials from './components/tutorials';
import Skatespots from './components/skatespots';
import Shop from './components/shop';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import './style/tutorials.scss';
import './style/skatespots.scss';
import './style/shop.scss';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/" component={Home} />
          <Route exact path="/skatespots" component={Skatespots} />
          <Route exact path="/shop" component={Shop} />
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
