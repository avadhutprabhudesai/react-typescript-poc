import { Tabs } from 'antd';
import React from 'react';
import { Provider } from 'react-redux';
import ReduxToolKit from './ReduxToolKit';
import store from './store';
import style from './style.module.css';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseState from './UseState';

const { TabPane } = Tabs;

const Hooks = () => {
  return (
    <div className={style.content}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="useState" key="1">
          <UseState />
        </TabPane>
        <TabPane tab="useReducer" key="2">
          <UseReducer />
        </TabPane>
        <TabPane tab="Redux" key="3">
          <Provider store={store}>
            <ReduxToolKit />
          </Provider>
        </TabPane>
        <TabPane tab="useRef" key="4">
          <UseRef />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default Hooks;
