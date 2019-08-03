import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();