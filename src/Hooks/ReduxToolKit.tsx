import { Button, Input } from 'antd';
63;
import React, { FormEvent, useEffect, useState } from 'react';
import {
  SendOutlined,
  RetweetOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import style from './style.module.css';
import { useAppDispatch, useAppSelector } from './rtk-hooks';
import { selectCount, set, inc, dec, reset } from './slice';
/**
 * Redux Toolkit
 *  - state
 *  - actions
 *  - reducer
 */

export default function ReduxToolKit() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [countInput, setCountInput] = useState(count);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(set(countInput));
  };

  useEffect(() => {
    setCountInput(count);
  }, [count]);

  return (
    <div className={style.counterWrapper}>
      <div className={style.card}>
        <h1>Days since last Coffee spill</h1>
        <h1 className={style.counter}>{count}</h1>
        <div className={style.actions}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => dispatch(inc())}
          >
            INC
          </Button>
          <Button
            type="primary"
            icon={<RetweetOutlined />}
            onClick={() => dispatch(reset())}
          >
            RESET
          </Button>
          <Button
            type="primary"
            icon={<MinusOutlined />}
            onClick={() => dispatch(dec())}
          >
            DEC
          </Button>
        </div>
        <form className={style.actionForm} onSubmit={handleFormSubmit}>
          <Input
            type="number"
            value={countInput}
            onChange={(e) => setCountInput(+e.target.value)}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={() => dispatch(set(countInput))}
          >
            SET
          </Button>
        </form>
      </div>
    </div>
  );
}
