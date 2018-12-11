import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LiveSearch from './livesearch';
import * as serviceWorker from './serviceWorker';
import characters from './list.json';

ReactDOM.render(<LiveSearch chars={characters}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
