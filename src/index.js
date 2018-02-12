import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Points from "./components/Points";

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
