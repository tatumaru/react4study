import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './components/Hello'
// import {UseMemoSample} from './components/UseMemoSample';
import {Clock} from './components/Clock';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseMemoSample /> */}
    <Clock></Clock>
  </React.StrictMode>,
  document.getElementById('root'),
);
