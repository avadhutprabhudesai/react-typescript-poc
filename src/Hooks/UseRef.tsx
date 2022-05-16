import React, { forwardRef, useRef, useState } from 'react';
import { Button, Input, InputRef } from 'antd';
import style from './style.module.css';
/**
 * useRef
 *  - DOM ref
 *  - MutableObject ref
 */

const InputComponent = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      className={style.input}
      type="text"
      ref={ref}
      placeholder="This is a native HTML input"
    />
  );
});

InputComponent.displayName = 'InputComponent';

export default function UseRef() {
  const countRef = useRef<number>(0);
  const inputRef = useRef<InputRef>(null);
  const inputForwardRef = useRef<HTMLInputElement>(null);
  const [, blankUpdate] = useState<Date | null>();
  return (
    <div className={style.content}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          type="primary"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        >
          Focus Antd input
        </Button>
        <Button
          type="primary"
          onClick={() => {
            if (inputForwardRef.current) {
              inputForwardRef.current.focus();
            }
          }}
        >
          Focus native input
        </Button>
        <Button
          type="primary"
          onClick={() => {
            countRef.current += 1;
            // no-op re-render to reflect ref value on UI
            blankUpdate(new Date());
          }}
        >
          Inc Count via ref
        </Button>
      </div>
      <Input ref={inputRef} placeholder="This is a Antd input" />
      <InputComponent ref={inputForwardRef} />
      <h1>Count ref value: {countRef.current}</h1>
    </div>
  );
}
