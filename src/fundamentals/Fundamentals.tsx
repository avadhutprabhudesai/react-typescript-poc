import React from 'react';
import NameTag from './NameTag';
import style from './style.module.css';

export default function Fundamentals() {
  return (
    <div className={style.content}>
      <NameTag name="Julius Caesar">
        <p>This tag has been issued by Googly.inc</p>
      </NameTag>
      <NameTag name="Nero" style={{ background: 'purple' }} />
    </div>
  );
}
