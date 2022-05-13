import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './style.module.css';
import Header from './src/Header/Header';

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<RouteConfig />, document.getElementById('root'));
