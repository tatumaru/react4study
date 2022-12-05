import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './components/Hello'
// import {UseMemoSample} from './components/UseMemoSample';
// import {Clock} from './components/Clock';
// import { Parent } from './components/useContext';
import { ImageUploader } from './components/useRef';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseMemoSample /> */}
    {/* <Clock></Clock> */}
    {/* <Parent></Parent> */}
    <ImageUploader></ImageUploader>
  </React.StrictMode>,
  document.getElementById('root'),
);
