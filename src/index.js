import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux imports
import { Provider} from 'react-redux';
import {createStore} from 'redux';

//reducer import
import {reducer} from "./reducers/reducer";

//styles
import 'bulma/css/bulma.css';
import './styles.scss';

//creating redux store
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    rootElement
);