/*
 * @Date: 2022-03-08 11:07:02
 * @LastEditors: xiaowen
 * @LastEditTime: 2022-03-23 10:28:55
 * @FilePath: \assessment-resource-system\src\pages\not-found\index.tsx
 * @Description:
 */
import * as React from 'react';
import './index.scss';

import { Result } from 'antd';


const Index = () => {
  return (
    <div className=" not_found">
      <Result status="error" title="错误路径" extra={[]}></Result>
    </div>
  );
};
export default Index;
