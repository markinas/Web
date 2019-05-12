import React from 'react';
import logo from './logo.svg';
import './App.css';
import './SCSS/style.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">

            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
    </div>
  );
}

export default App;
