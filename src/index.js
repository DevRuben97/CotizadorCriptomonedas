import React from 'react';
import ReactDOM from 'react-dom';
import App from './Componets/App';
import * as serviceWorker from './serviceWorker';
import './Styles/normalize.css';
import './Styles/skeleton.css';
import './Styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
