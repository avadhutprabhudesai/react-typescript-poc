import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={style.header}>
      <Link to="components-and-props">Components and Props</Link>
      <Link to="hooks">Hooks</Link>
      <Link to="form-and-events">Form and Events</Link>
      <Link to="context">Context API</Link>
    </div>
  );
}
