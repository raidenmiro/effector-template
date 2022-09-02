import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './application';
import './index.css';

const root = document.querySelector('#root');

if (root) {
    ReactDOM.createRoot(root).render(<App/>)
}
