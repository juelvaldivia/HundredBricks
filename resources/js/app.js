/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// importa store de redux de la app
import store from './src/redux/store';
// importa el componente principal de la App
import { App }  from './src/App/App';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
