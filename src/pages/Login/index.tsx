/*
 * @Date: 2022-03-08 11:07:02
 * @LastEditors: GUI XUE TING
 * @LastEditTime: 2022-12-21 10:39:04
 * @FilePath: \assessment-resource-system\src\pages\not-found\index.tsx
 * @Description:
 */
import * as React from 'react';
import './index.scss';

import { Button, Result } from 'antd';


const Index = (props) => {
  return (
    <div className=" df aic jcc h100">
      <Button type='primary' onClick={() => props.history.push('/index/test')}>登录</Button>
    </div>
  );
};
export default Index;
