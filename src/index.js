import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myreducer from './reducers/reducers';
import createSageMiddleware from 'redux-saga';
import  {watchAgeUp} from './sagas/saga';

const saga = createSageMiddleware(watchAgeUp);
const store = createStore(myreducer, applyMiddleware(saga));
saga.run(watchAgeUp);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));
