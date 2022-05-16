import { Button, Input } from 'antd';
import React, { FormEvent, useEffect, useReducer, useState } from 'react';
import {
  SendOutlined,
  RetweetOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import style from './style.module.css';
/**
 * useReducer
 *  - state
 *  - actions
 *  - reducer
 */

type State = {
  count: number;
};

type Action =
  | {
      type: 'INC';
    }
  | {
      type: 'DEC';
    }
  | {
      type: 'SET';
      payload: number;
    }
  | {
      type: 'RESET';
    };

const initialState: State = {
  count: 0,
};

function reducer(state: State, action: Action): State {
  if (action.type === 'INC') {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === 'DEC') {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === 'SET') {
    return {
      count: action.payload,
    };
  }
  if (action.type === 'RESET') {
    return initialState;
  }
  return state;
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [countInput, setCountInput] = useState(state.count);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SET', payload: countInput });
  };

  useEffect(() => {
    setCountInput(state.count);
  }, [state.count]);

  return (
    <div className={style.counterWrapper}>
      <div className={style.card}>
        <h1>Days since last Coffee spill</h1>
        <h1 className={style.counter}>{state.count}</h1>
        <div className={style.actions}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => dispatch({ type: 'INC' })}
          >
            INC
          </Button>
          <Button
            type="primary"
            icon={<RetweetOutlined />}
            onClick={() => dispatch({ type: 'RESET' })}
          >
            RESET
          </Button>
          <Button
            type="primary"
            icon={<MinusOutlined />}
            onClick={() => dispatch({ type: 'DEC' })}
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
            onClick={() => dispatch({ type: 'SET', payload: countInput })}
          >
            SET
          </Button>
        </form>
      </div>
    </div>
  );
}
