import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App.js
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //(组件， 挂载点)
registerServiceWorker();
