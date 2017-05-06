import React from 'react';
import ReactDom from 'react-dom';

import App from './app/App';
import FizzBuzz from './app/FizzBuzz'; 

import 'bootstrap-fileinput/css/fileinput.min.css';
import './style/style.styl';


const app = document.getElementById('app');

ReactDom.render(<App />, app);