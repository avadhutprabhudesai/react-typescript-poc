import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import style from './style.module.css';

export default function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <Outlet></Outlet>
    </div>
  );
}
