import { Button } from 'antd';
import React, { useContext, useReducer } from 'react';
import {
  RetweetOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import style from './style.module.css';

type State = {
  count: number;
};

type Action = {
  type: 'INC' | 'DEC' | 'RESET';
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
  if (action.type === 'RESET') {
    return initialState;
  }
  return state;
}

function Counter() {
  const { count, inc, dec, reset } = useCounter();
  return (
    <div className={style.counterWrapper}>
      <div className={style.card}>
        <h1>Days since last Coffee spill</h1>
        <h1 className={style.counter}>{count}</h1>
        <div className={style.actions}>
          <Button type="primary" icon={<PlusOutlined />} onClick={inc}>
            INC
          </Button>
          <Button type="primary" icon={<RetweetOutlined />} onClick={reset}>
            RESET
          </Button>
          <Button type="primary" icon={<MinusOutlined />} onClick={dec}>
            DEC
          </Button>
        </div>
      </div>
    </div>
  );
}

type CounterContextType = {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
};

const CounterContext = React.createContext<CounterContextType | null>(null);

function useCounter() {
  const counterContext = useContext(CounterContext);
  if (counterContext == undefined) {
    throw new Error(
      'useCounter is being used outside the hierarchy of CounterContext.Provider'
    );
  }
  const { count, inc, dec, reset } = counterContext;
  return { count, inc, dec, reset };
}

export default function Context() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = () => dispatch({ type: 'INC' });
  const dec = () => dispatch({ type: 'DEC' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div className={style.content}>
      <CounterContext.Provider value={{ count: state.count, inc, dec, reset }}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}
