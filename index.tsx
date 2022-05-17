import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './style.module.css';
import Header from './src/Header/Header';
import './src/ts-basics/type-guards-and-discriminated-unions';
import './src/ts-basics/generics';
import Layout from './src/Layout/Layout';
import ComponentProps from './src/Components-Props/ComponentProps';
import Hooks from './src/Hooks/Hooks';
import FormsAndEvents from './src/FormsAndEvents/FormsAndEvents';
import Context from './src/Context/Context';

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Props</h1>}></Route>
          <Route
            path="/components-and-props"
            element={<ComponentProps />}
          ></Route>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/form-and-events" element={<FormsAndEvents />}></Route>
          <Route path="/context" element={<Context />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<RouteConfig />, document.getElementById('root'));
